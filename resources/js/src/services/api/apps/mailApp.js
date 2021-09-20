import mock from '../../mockConfig';
import { connectionsList, filterOptions, folderList, labelsList, mails } from '../../../@fake-db/apps/mail';
import { getTodayDate } from '../../../@jumbo/utils/dateHelper';
import { idGenerator } from '../../../@jumbo/utils/commonHelper';

let mailList = mails;
let labels = labelsList;
let connections = connectionsList;

mock.onGet('/labels').reply(200, labelsList);

mock.onPost('/labels').reply(request => {
  const { label } = JSON.parse(request.data);
  let newLabel = { ...label, id: idGenerator(), slug: label.name.toLowerCase() };
  labels = labels.concat(newLabel);
  return [200, newLabel];
});

mock.onPut('/labels').reply(request => {
  const { label } = JSON.parse(request.data);
  labels = labels.map(item => (item.id === label.id ? label : item));
  return [200];
});

mock.onPut('/labels/delete').reply(request => {
  const { labelId } = JSON.parse(request.data);
  labels = labels.filter(item => item.id !== labelId);
  return [200];
});

mock.onGet('/connections').reply(200, connectionsList);

mock.onPost('/connections').reply(request => {
  const { connection } = JSON.parse(request.data);
  const isConnectionPresent = connections.some(item => item.email === connection.email);
  if (!isConnectionPresent) {
    let newConnection = { ...connection, id: idGenerator(), status: 0 };
    connections = connections.concat(newConnection);
    return [200, newConnection];
  }
  return [400];
});

mock.onDelete('/connections').reply(request => {
  const { connection } = request.params;
  connections = connections.filter(item => item.email !== connection.email);
  return [200];
});

mock.onGet('/counter').reply(config => {
  const counter = { folders: {}, labels: {}, filters: {} };
  folderList.map(item => {
    counter.folders[item.slug] = mailList.filter(mail => mail.folder === item.slug).filter(mail => !mail.read).length;
    return null;
  });

  filterOptions.map(item => {
    if (item.slug === 'important') {
      counter.filters[item.slug] = mailList.filter(mail => mail.important).filter(mail => !mail.read).length;
    } else {
      counter.filters[item.slug] = mailList.filter(mail => mail.favorite).filter(mail => !mail.read).length;
    }
    return null;
  });

  labelsList.map(item => {
    counter.labels[item.id] = mailList.filter(mail => mail.labels.includes(item.id)).filter(mail => !mail.read).length;
    return null;
  });

  return [200, counter];
});

mock.onGet('/mails').reply(config => {
  const { params } = config;
  const { selectedFolder, selectedLabel, selectedFilter, searchText, page } = params;
  let folderMailList = [];
  if (searchText) {
    folderMailList = mailList.filter(
      mail =>
        mail.message.toLowerCase().includes(searchText.toLowerCase()) ||
        mail.subject.toLowerCase().includes(searchText.toLowerCase()),
    );
  }
  if (selectedFolder) {
    folderMailList = mailList.filter(mail => mail.folder === selectedFolder);
  }
  if (selectedFilter) {
    if (selectedFilter === 'important') {
      folderMailList = mailList.filter(mail => mail.important);
    } else {
      folderMailList = mailList.filter(mail => mail.favorite);
    }
  }
  if (selectedLabel) {
    folderMailList = mailList.filter(mail => mail.labels.includes(selectedLabel));
  }
  const index = page * 10;
  const total = folderMailList.length;
  const list = folderMailList.length > 10 ? folderMailList.slice(index, index + 10) : folderMailList;
  return [200, { list, total }];
});

mock.onPut('/mailApp/update-folder').reply(request => {
  const { mailIds, folder } = JSON.parse(request.data);
  mailList = mailList.map(mail => {
    if (mailIds.includes(mail.id)) {
      mail.folder = folder;
      return mail;
    } else {
      return mail;
    }
  });
  return [200];
});

mock.onPut('/mailApp/update-label').reply(request => {
  const { mailIds, label } = JSON.parse(request.data);
  mailList = mailList.map(mail => {
    if (mailIds.includes(mail.id)) {
      const newLabel = mail.labels.find(item => item === label);
      if (newLabel) {
        mail.labels = mail.labels.filter(item => item !== label);
      } else {
        mail.labels = mail.labels.concat(label);
      }
      return mail;
    } else {
      return mail;
    }
  });
  const updatedMails = mailList.filter(mail => mailIds.includes(mail.id));
  return [200, updatedMails];
});

mock.onPut('/mailApp/update-read').reply(request => {
  const { mailIds, status } = JSON.parse(request.data);
  mailList = mailList.map(mail => {
    if (mailIds.includes(mail.id)) {
      mail.read = status;
      return mail;
    } else {
      return mail;
    }
  });
  return [200];
});

mock.onPut('/mailApp/update-favorite').reply(request => {
  const { mailIds, status } = JSON.parse(request.data);
  mailList = mailList.map(mail => {
    if (mailIds.includes(mail.id)) {
      mail.favorite = status;
      return mail;
    } else {
      return mail;
    }
  });
  return [200];
});

mock.onPut('/mailApp/update-important').reply(request => {
  const { mailIds, status } = JSON.parse(request.data);
  mailList = mailList.map(mail => {
    if (mailIds.includes(mail.id)) {
      mail.important = status;
      return mail;
    } else {
      return mail;
    }
  });
  return [200];
});

mock.onPost('/mail').reply(request => {
  const { mail } = JSON.parse(request.data);
  const newMail = {
    id: idGenerator(),
    read: false,
    favorite: false,
    important: false,
    labels: [],
    folder: 'sent',
    date: getTodayDate('DD MMM, YYYY, hh:mm a'),
    replyThread: [],
    ...mail,
  };
  mailList = [newMail, ...mailList];
  return [200, newMail];
});

mock.onGet('/mail').reply(config => {
  const { params } = config;
  const mail = mailList.find(mail => mail.id === params.mailId);
  return [200, mail];
});

mock.onPut('/mail').reply(request => {
  const { mail } = JSON.parse(request.data);
  mailList = mailList.map(item => (item.id === mail.id ? mail : item));
  return [200];
});

mock.onPut('/mail/reply').reply(request => {
  const { id, mail } = JSON.parse(request.data);
  const currentMail = mailList.find(item => item.id === id);
  mail.date = getTodayDate('DD MMM, YYYY, hh:mm a');
  currentMail.replyThread = currentMail.replyThread.concat(mail);
  return [200, currentMail];
});
