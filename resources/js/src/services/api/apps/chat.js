import mock from '../../mockConfig';
import { conversation, users } from '../../../@fake-db/apps/chat';

mock.onGet('/chat/users').reply(req => {
  const { search } = req.params.filterData;
  if (search) {
    return [200, users.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))];
  }
  return [200, users];
});

mock.onGet('/chat/contact/users').reply(req => {
  const { search } = req.params.filterData;
  if (search) {
    return [200, users.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))];
  }
  return [200, users];
});

mock.onGet('/chat/conversation').reply(req => {
  const { channelId } = req.params;
  return [200, conversation.filter(item => item.id === channelId)[0].conversationData];
});
