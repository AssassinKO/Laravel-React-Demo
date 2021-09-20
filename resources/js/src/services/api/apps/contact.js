import mock from '../../mockConfig';
import { idGenerator } from '../../../@jumbo/utils/commonHelper';
import { contacts, foldersList, labelsList } from '../../../@fake-db/apps/contact';

let labels = labelsList;
let contactsList = contacts;

mock.onGet('/contact/labels').reply(200, labelsList);

mock.onPost('/contact/labels').reply(request => {
  const { label } = JSON.parse(request.data);
  let newLabel = { ...label, id: idGenerator(), slug: label.name.toLowerCase() };
  labels = labels.push(newLabel);
  return [200, newLabel];
});

mock.onPut('/contact/labels').reply(request => {
  const { label } = JSON.parse(request.data);
  labels = labels.map(item => (item.id === label.id ? label : item));
  return [200];
});

mock.onPut('/contact/labels/delete').reply(request => {
  const { labelId } = JSON.parse(request.data);
  labels = labels.filter(item => item.id !== labelId);
  return [200];
});

mock.onGet('/contact').reply(config => {
  const { params } = config;
  const { selectedFolder, selectedLabel, searchText } = params;
  let folderContacts = [];
  if (searchText) {
    folderContacts = contactsList.filter(
      contact =>
        contact.name.toLowerCase().includes(searchText.toLowerCase()) ||
        contact.phones.map(item => item.phone).includes(searchText),
    );
  }
  if (selectedFolder) {
    if (selectedFolder === 'starred') {
      folderContacts = contactsList.filter(contact => contact.starred);
    } else if (selectedFolder === 'frequent') {
      folderContacts = contactsList.filter(contact => contact.frequent);
    } else {
      folderContacts = contactsList.filter(contact => contact.folder === selectedFolder);
    }
  }

  if (selectedLabel) {
    folderContacts = contactsList.filter(contact => contact.labels.includes(selectedLabel));
  }

  const total = folderContacts.length;

  return [200, { folderContacts, total }];
});

mock.onPut('/contact/update-starred').reply(request => {
  const { contactIds, status } = JSON.parse(request.data);
  contactsList = contactsList.map(contact => {
    if (contactIds.includes(contact.id)) {
      contact.starred = status;
      return contact;
    } else {
      return contact;
    }
  });
  return [200];
});

mock.onPut('/contact/delete').reply(request => {
  const { contactIds } = JSON.parse(request.data);
  contactsList = contactsList.map(contact => {
    if (contactIds.includes(contact.id)) {
      contact.folder = 'trash';
      return contact;
    } else {
      return contact;
    }
  });
  return [200];
});

mock.onPut('/contact/update-label').reply(request => {
  const { contactIds, label } = JSON.parse(request.data);
  contactsList = contactsList.map(contact => {
    if (contactIds.includes(contact.id)) {
      const newLabel = contact.labels.find(item => item === label);
      if (newLabel) {
        contact.labels = contact.labels.filter(item => item !== label);
      } else {
        contact.labels = contact.labels.concat(label);
      }
      return contact;
    } else {
      return contact;
    }
  });
  const updatedContacts = contactsList.filter(contact => contactIds.includes(contact.id));
  return [200, updatedContacts];
});

mock.onPost('/contact').reply(request => {
  const { contact } = JSON.parse(request.data);
  const newContact = {
    id: idGenerator(),
    frequent: false,
    starred: false,
    labels: [],
    folder: 'contacts',
    ...contact,
  };
  contactsList = [newContact, ...contactsList];
  return [200, newContact];
});

mock.onPut('/contact').reply(request => {
  const { contact } = JSON.parse(request.data);
  contactsList = contactsList.map(item => (item.id === contact.id ? contact : item));
  return [200];
});

mock.onGet('/contact/counter').reply(config => {
  const counter = { folders: {}, labels: {} };
  foldersList.map(item => {
    if (item.slug === 'starred') {
      counter.folders[item.id] = contactsList.filter(contact => contact.starred).length;
    } else if (item.slug === 'frequent') {
      counter.folders[item.id] = contactsList.filter(contact => contact.frequent).length;
    } else {
      counter.folders[item.id] = contactsList.filter(contact => contact.folder === item.slug).length;
    }
    return null;
  });

  labelsList.map(item => {
    counter.labels[item.id] = contactsList.filter(contact => contact.labels.includes(item.id)).length;
    return null;
  });

  return [200, counter];
});
