import React from 'react';
import { Box } from '@material-ui/core';
import CmtImage from '../../../../@coremat/CmtImage';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    paddingTop: 0,
  },
  titleRoot: {
    color: theme.palette.text.disabled,
  },
}));

const TaskListEmptyComponent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box mb={3}>
        <CmtImage width={50} src={'/images/icon_task.png'} />
      </Box>
      <Typography className={classes.titleRoot}> No Task Found, Get Started Now</Typography>
    </Box>
  );
};

export default TaskListEmptyComponent;
