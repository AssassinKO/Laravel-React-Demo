import mock from '../mockConfig';
import { idGenerator } from '../../@jumbo/utils/commonHelper';
import { usersModule } from '../../@fake-db';
let users = usersModule.usersList;

mock.onGet('/users').reply(request => {
  const { filterOptions, searchTerm } = request.params;
  const filterLength = filterOptions.length;

  let filteredUsers = users;

  if (searchTerm || filterLength > 0) {
    if (searchTerm && filterLength > 0) {
      filteredUsers = users.filter(
        user => user.name.toLowerCase().includes(searchTerm.toLowerCase()) && filterOptions.includes(user.status),
      );
    } else if (searchTerm) {
      filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
    } else {
      filteredUsers = users.filter(user => filterOptions.includes(user.status));
    }
  }

  return [200, filteredUsers];
});

mock.onPost('/users').reply(request => {
  const user = JSON.parse(request.data);
  const newUser = {
    id: idGenerator(),
    starred: false,
    labels: [],
    emailUsage: 0.0, // GB
    status: 'active',
    suspendedBy: 'Admin',
    suspendedAt: new Date(),
    lastLoginAt: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
    ...user,
  };
  users = [newUser, ...users];
  return [200, newUser];
});

mock.onPut('/users').reply(request => {
  const user = JSON.parse(request.data);
  users = users.map(item => (item.id === user.id ? user : item));
  return [200, user];
});

mock.onPut('/users/update-status').reply(request => {
  const { status, id } = JSON.parse(request.data);
  let updatedUser = null;
  users = users.map(item => {
    if (item.id === id) {
      item.status = status;
      if (status === 'suspended') item.suspendedAt = new Date();
      updatedUser = item;
    }

    return item;
  });
  return [200, updatedUser];
});

mock.onPut('/users/bulk-delete').reply(request => {
  const { userIds } = JSON.parse(request.data);
  users = users.filter(user => !userIds.includes(user.id));
  return [200];
});

mock.onDelete('/users').reply(request => {
  const params = request.params;
  users = users.filter(item => item.id !== params.id);
  return [200];
});
