import React, { useRef, useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import clsx from 'clsx';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LabelIcon from '@material-ui/icons/Label';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch } from 'react-redux';
import { deleteTaskLIst, updateTaskLIst } from '../../../../redux/actions/TaskList';
import LabelForm from '../../../../@jumbo/components/Common/LabelForm';

const TaskListCell = ({ taskList, count, item, onTaskListChange, classes }) => {
  const [isEdit, setEdit] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const [anchorEditEl, setAnchorEditEl] = useState(null);
  const ListRef = useRef(null);

  const handleClick = event => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = e => {
    e.stopPropagation();
    setAnchorEl(null);
    ListRef.current.blur();
  };
  const onClickEdit = event => {
    setEdit(true);
    handleClose(event);
    setAnchorEditEl(ListRef.current);
  };

  const handleEditClose = () => {
    setAnchorEditEl(null);
  };

  const onClickDelete = e => {
    handleClose(e);
    dispatch(deleteTaskLIst(item));
  };

  return (
    <React.Fragment>
      <ListItem
        ref={ListRef}
        button
        className={clsx(classes.appNavItem, classes.appTaskNavItem, {
          active: taskList === item.id,
        })}
        onClick={e => onTaskListChange(item.id)}>
        <ListItemIcon className="Cmt-icon-root">
          <LabelIcon style={{ color: item.color }} />
        </ListItemIcon>
        <ListItemText className="Cmt-nav-text" primary={item.name} />
        {count > 0 && (
          <Box component="span" className="Cmt-nav-count">
            {count}
          </Box>
        )}

        <Box className="Cmt-more-vert-icon">
          <MoreVertIcon onClick={handleClick} />
        </Box>
        <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={onClickEdit}>Edit</MenuItem>
          <MenuItem onClick={onClickDelete}>Delete</MenuItem>
        </Menu>
      </ListItem>

      {isEdit && (
        <LabelForm
          anchorEl={anchorEditEl}
          onClose={handleEditClose}
          label={item}
          setEdit={setEdit}
          saveLabel={updateTaskLIst}
        />
      )}
    </React.Fragment>
  );
};

export default TaskListCell;
