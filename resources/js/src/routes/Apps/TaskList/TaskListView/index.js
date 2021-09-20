import React, { useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import CmtList from '../../../../@coremat/CmtList';
import { useDispatch, useSelector } from 'react-redux';
import TaskCell from './TaskCell';
import { getTasks } from '../../../../redux/actions/TaskList';
import AddTask from '../AddTask';
import TaskListEmptyComponent from './TaskListEmptyComponent';
import moment from 'moment';
import ListEmptyResult from '../../../../@coremat/CmtList/ListEmptyResult';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    '& .CmtList-EmptyResult': {
      backgroundColor: 'transparent',
      border: '0 none',
      borderRadius: 0,
    },
  },
}));

const TaskListView = () => {
  const { tasks, filterData } = useSelector(({ taskList }) => taskList);
  const { loading } = useSelector(({ common }) => common);
  const [isAddTaskView, setAddTaskView] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getTasks(filterData));
  }, [dispatch, filterData]);

  const onStartAddTask = () => {
    setAddTaskView(!isAddTaskView);
  };

  const headerTitle = (task, index) => {
    return (
      <Box
        key={index}
        ml={8}
        py={4}
        fontSize={10}
        color="text.secondary"
        style={{
          textTransform: 'uppercase',
        }}>
        {task.title}
      </Box>
    );
  };
  const getHeaderTitle = task => {
    const difference = moment().diff(task.dueDate, 'days');

    if (difference === 0) {
      return 'Today';
    } else if (difference < 0) {
      return 'UpComing';
    } else {
      return 'Over Due';
    }
  };
  const generateHeaderList = () => {
    if (tasks.length === 0) {
      return [];
    }
    let taskListWithHeader = [];

    let currentHeaderTitle = getHeaderTitle(tasks[0]);
    let headerTitle = currentHeaderTitle;
    taskListWithHeader = [{ id: 'header-0', header: true, title: headerTitle }];

    tasks.map(task => {
      currentHeaderTitle = getHeaderTitle(task);
      if (headerTitle !== currentHeaderTitle) {
        taskListWithHeader = taskListWithHeader.concat({
          id: 'header-' + taskListWithHeader.length,
          header: true,
          title: currentHeaderTitle,
        });
        headerTitle = currentHeaderTitle;
      }
      taskListWithHeader = taskListWithHeader.concat(task);

      return task;
    });
    return taskListWithHeader;
  };

  const onEndReached = () => {};

  return (
    <Box height={1} display="flex" flexDirection="column">
      <AddTask isAddTaskView={isAddTaskView} onStartAddTask={onStartAddTask} />
      <Box className={classes.root}>
        <CmtList
          style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
          ListEmptyComponent={
            <ListEmptyResult loader={loading}>
              <TaskListEmptyComponent />
            </ListEmptyResult>
          }
          data={generateHeaderList()}
          renderRow={(data, index) => {
            if (data.header) {
              return headerTitle(data, index);
            } else {
              return <TaskCell key={index} data={data} />;
            }
          }}
          onEndReached={onEndReached}
        />
      </Box>
    </Box>
  );
};

export default TaskListView;
