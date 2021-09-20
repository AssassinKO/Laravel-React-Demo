import IconButton from '@material-ui/core/IconButton';
import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Box } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../../../redux/actions/TaskList';
import makeStyles from '@material-ui/core/styles/makeStyles';
import EditIcon from '@material-ui/icons/Edit';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import AssignTaskList from '../AssignTaskList';

const useStyles = makeStyles(theme => ({
  menuItemsRoot: {
    fontSize: 14,
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '& .MuiTouchRipple-root': {
      display: 'none',
    },
    '& .MuiSvgIcon-root': {
      display: 'block',
      fontSize: 18,
    },
  },
}));

const TaskOptions = ({ task, onClickFullScreen }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openAssignTaskList, setOpenAssignTaskList] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const onDeleteTask = () => {
    setAnchorEl(null);
    dispatch(deleteTask(task));
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFullScreenView = () => {
    if (onClickFullScreen) onClickFullScreen();
    setAnchorEl(null);
  };

  const onTaskListClick = () => {
    handleClose();
    setOpenAssignTaskList(true);
  };

  return (
    <Box>
      <IconButton onClick={handleClick}>
        <MoreHorizIcon />
      </IconButton>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem className={classes.menuItemsRoot} onClick={onTaskListClick}>
          <Box display="flex" alignItems="center" width={1}>
            <EditIcon />
            <Box ml={4} component="span">
              Task List
            </Box>
          </Box>
        </MenuItem>
        {onClickFullScreen && (
          <MenuItem className={classes.menuItemsRoot} onClick={handleFullScreenView}>
            <Box display="flex" alignItems="center" width={1}>
              <FullscreenIcon />
              <Box ml={4} component="span">
                Full Screen
              </Box>
            </Box>
          </MenuItem>
        )}
        <MenuItem className={classes.menuItemsRoot} onClick={onDeleteTask}>
          <Box display="flex" alignItems="center" width={1}>
            <DeleteOutlineIcon />
            <Box ml={4} component="span">
              Delete
            </Box>
          </Box>
        </MenuItem>
      </Menu>

      <AssignTaskList currentTask={task} open={openAssignTaskList} handleClose={() => setOpenAssignTaskList(false)} />
    </Box>
  );
};

export default TaskOptions;
