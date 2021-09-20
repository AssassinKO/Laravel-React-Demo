import mock from '../../mockConfig';
import { taskLists, tasks, users } from '../../../@fake-db/apps/todo';
import { idGenerator } from '../../../@jumbo/utils/commonHelper';

let lists = taskLists;
let tasksList = tasks;
const currentUser = users[0];

mock.onGet('/tasks').reply(req => {
  const { filterType, taskList, search } = req.params.filterData;

  if (search) {
    return [200, tasksList.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))];
  }
  if (taskList) return [200, tasksList.filter(item => item.taskList === taskList)];

  if (filterType === 1) {
    return [200, tasksList.filter(item => item.assigned && item.assigned.id === currentUser.id)];
  }
  if (filterType === 2) {
    return [200, tasksList];
  }
  if (filterType === 3) {
    return [200, tasksList.filter(item => item.isStared)];
  }
  return [200, tasksList];
});

mock.onPost('/tasks').reply(request => {
  const { task } = JSON.parse(request.data);
  const newTask = {
    ...task,
    id: idGenerator(),
  };
  tasksList.push(newTask);
  return [200, newTask];
});

mock.onPut('/tasks').reply(request => {
  const { task } = JSON.parse(request.data);
  tasksList = tasksList.map(item => (item.id === task.id ? task : item));
  return [200];
});

mock.onDelete('/tasks').reply(request => {
  const { task } = request.params;
  tasksList = tasksList.filter(item => item.id !== task.id);
  return [200];
});

mock.onGet('/task_list').reply(200, {
  taskList: lists,
});

mock.onPost('/task_list').reply(request => {
  const { taskList } = JSON.parse(request.data);
  let newTaskList = { ...taskList, id: idGenerator() };
  lists.push(newTaskList);
  return [200, newTaskList];
});

mock.onPut('/task_list').reply(request => {
  const { taskList } = JSON.parse(request.data);
  lists = lists.map(item => (item.id === taskList.id ? taskList : item));
  return [200];
});

mock.onDelete('/task_list').reply(request => {
  const { taskList } = request.params;
  lists = lists.filter(item => item.id !== taskList.id);
  return [200];
});

mock.onGet('/tasks/counter').reply(config => {
  const counter = { lists: {} };

  counter.all = tasksList.length;
  counter.important = tasksList.filter(task => task.isStared).length;
  counter.myTasks = tasksList.filter(task => task.assigned && task.assigned.id === currentUser.id).length;

  lists.map(item => {
    counter.lists[item.id] = tasksList.filter(task => task.taskList === item.id).length;
    return null;
  });

  return [200, counter];
});
