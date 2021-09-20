import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import Sidebar from './Sidebar';
import TaskListContainer from './TaskListContainer';
import useStyles from './index.style';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import TaskDetail from './TaskDetail';
import { users } from '../../../@fake-db/apps/todo';
import { setCurrentUser } from '../../../redux/actions/TaskList';

const TaskList = () => {
  const classes = useStyles();
  const { isSideBarCollapsed } = useSelector(({ taskList }) => taskList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentUser(users[0]));
  }, [dispatch]);

  return (
    <Box display="flex" position="relative">
      <Box className={clsx(classes.inBuildAppContainer, isSideBarCollapsed ? 'collapsed' : '')}>
        <Sidebar />
        <TaskListContainer />
      </Box>
      <TaskDetail />
    </Box>
  );
};

export default TaskList;
