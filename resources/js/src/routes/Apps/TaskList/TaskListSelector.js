import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  selecBoxRoot: {
    '&.MuiInput-underline:before, &.MuiInput-underline:after': {
      display: 'none',
    },
  },
}));

const TaskListSelector = ({ selectedTaskList = 1, taskLists, onTaskListSelect }) => {
  const classes = useStyles();
  return (
    <Select
      className={clsx(classes.selecBoxRoot, 'select-box')}
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={selectedTaskList}
      onChange={e => onTaskListSelect(e.target.value)}>
      {taskLists.map(taskList => (
        <MenuItem key={taskList.id} value={taskList.id}>
          {taskList.name}
        </MenuItem>
      ))}
    </Select>
  );
};

export default TaskListSelector;
