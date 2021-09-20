import React from 'react';
import { Box } from '@material-ui/core';
import Sidebar from './Sidebar';
import useStyles from './index.style';
import ChatContainer from './ChatContainer';

const TaskList = () => {
  const classes = useStyles();
  return (
    <Box className={classes.inBuildAppContainer}>
      <Sidebar />
      <ChatContainer />
    </Box>
  );
};

export default TaskList;
