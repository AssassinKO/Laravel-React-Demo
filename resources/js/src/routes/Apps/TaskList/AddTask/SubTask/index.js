import React from 'react';
import { Box } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CmtList from '../../../../../@coremat/CmtList';
import SubTaskCell from './SubTaskCell';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  addSubTask: {
    color: theme.palette.text.disabled,
    display: 'flex',
    padding: '5px 12px',
    cursor: 'pointer',
  },
  addTaskText: {
    fontSize: 14,
    letterSpacing: 0.5,
    [theme.breakpoints.up('sm')]: {
      fontSize: 16,
    },
  },
}));

const SubTask = ({ subTasks, onChangeSubTaskTile, onAddSubTask, removeSubTask, onSubTaskAssign }) => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column">
      <Box onClick={onAddSubTask} className={clsx(classes.addSubTask, 'add-subtask')}>
        <AddIcon />
        <Box component="span" ml={4} className={classes.addTaskText}>
          Add a SubTask
        </Box>
      </Box>
      <CmtList
        data={subTasks}
        renderRow={(data, index) => (
          <SubTaskCell
            data={data}
            key={data.id}
            index={index}
            onSubTaskAssign={onSubTaskAssign}
            onChange={onChangeSubTaskTile}
            removeSubTask={removeSubTask}
          />
        )}
      />
    </Box>
  );
};

export default SubTask;
