import React from 'react';
import { Box } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import TaskOptions from './TaskOptions';
import IconButton from '@material-ui/core/IconButton';
import { onTaskSelect, updateTask } from '../../../../redux/actions/TaskList';
import { useDispatch } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';

const DetailHeader = ({ currentTask, onClickFullScreen, onCloseDetail }) => {
  const dispatch = useDispatch();

  const onToggleMarkComplete = event => {
    dispatch(updateTask({ ...currentTask, isCompleted: event.target.checked }));
    dispatch(onTaskSelect({ ...currentTask, isCompleted: event.target.checked }));
  };

  const onCloseClick = () => {
    if (onCloseDetail) onCloseDetail();
    else dispatch(onTaskSelect(null));
  };

  return (
    <Box px={6} pt={6} display="flex">
      <Box ml={-3} display="flex" alignItems="center">
        <Checkbox
          color="primary"
          checked={currentTask.isCompleted}
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
          onChange={onToggleMarkComplete}
        />
        {currentTask.isCompleted ? 'Completed' : 'Mark as Complete'}
      </Box>
      <Box ml="auto" display="flex" alignItems="center">
        <TaskOptions task={currentTask} onClickFullScreen={onClickFullScreen} onCloseDetail={onCloseDetail} />
        <IconButton onClick={onCloseClick}>
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default DetailHeader;
