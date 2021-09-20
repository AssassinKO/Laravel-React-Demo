import React from 'react';
import moment from 'moment';
import Box from '@material-ui/core/Box';
import { TaskStatus } from '../../../../@fake-db/apps/todo';
import Checkbox from '@material-ui/core/Checkbox';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useDispatch, useSelector } from 'react-redux';
import { onTaskSelect, updateTask } from '../../../../redux/actions/TaskList';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import clsx from 'clsx';

import useStyles from './TaskCell.style';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import { Tooltip } from '@material-ui/core';
import { alpha } from '@material-ui/core/styles';

const TaskCell = ({ data }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { taskLists, currentTask } = useSelector(({ taskList }) => taskList);

  const assignedTaskList = taskLists.find(item => item.id === data.taskList);

  const onClickStarredIcon = status => {
    dispatch(updateTask({ ...data, isStared: status }));
    if (currentTask.id === data.id) {
      dispatch(onTaskSelect({ ...data, isStared: status }));
    }
  };

  const onToggleMarkComplete = event => {
    dispatch(updateTask({ ...data, isCompleted: event.target.checked }));
    if (currentTask && currentTask.id === data.id) {
      dispatch(onTaskSelect({ ...data, isCompleted: event.target.checked }));
    }
  };

  return (
    <Box
      className={clsx(classes.taskCellItem, {
        completed: data.isCompleted,
        selected: currentTask && data.id === currentTask.id,
      })}
      onClick={() => dispatch(onTaskSelect(data))}>
      <Box className={classes.taskCellContent}>
        <Box mt={-1} mr={3} onClick={e => e.stopPropagation()}>
          <Checkbox
            color="primary"
            checked={data.isCompleted}
            onChange={onToggleMarkComplete}
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<CheckCircleIcon />}
          />
        </Box>

        <Box className={classes.taskCellContentAction}>
          <Typography className={classes.titleRoot} component="span" variant="h4">
            {data.title}
          </Typography>
          {assignedTaskList && (
            <Box
              component="span"
              className={classes.badgeRoot}
              style={{
                backgroundColor: alpha(assignedTaskList.color, 0.1),
                color: assignedTaskList.color,
              }}>
              {assignedTaskList.name}
            </Box>
          )}
          <Box mt={1} display="flex" alignItems="center" flexWrap="wrap" component="p" color="text.disabled" fontSize={12}>
            {data.subTasks && data.subTasks.filter(data => data.status === TaskStatus.COMPLETED).length} {' of '}
            {data.subTasks.length}
            {' Completed'}
            <Box component="span" className={classes.dots} />
            {' Due on: '} {moment(data.dueDate).calendar()}
          </Box>
        </Box>
      </Box>
      <Box className={classes.taskCellAction}>
        <Tooltip title={data.assigned ? data.assigned.name : 'Unassigned'}>
          <CmtAvatar
            className={classes.imgRoot}
            src={data.assigned ? data.assigned.profilePic : null}
            size={40}
            alt={data.assigned ? data.assigned.name : 'Unassigned'}
          />
        </Tooltip>
        <Box ml={2} onClick={e => e.stopPropagation()}>
          <Checkbox
            icon={<StarBorderIcon />}
            checkedIcon={<StarIcon style={{ color: '#FF8C00' }} />}
            checked={data.isStared}
            onChange={e => onClickStarredIcon(e.target.checked)}
            size="small"
          />
        </Box>
        <Box className={classes.arrowIconRoot}>
          <IconButton className={classes.arrowIcon}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default TaskCell;
