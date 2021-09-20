import React from 'react';
import clsx from 'clsx';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';

const TaskFilterCell = ({ id, title, count, icon, classes, filterType, onTaskFilterChange }) => {
  return (
    <ListItem
      button
      className={clsx(classes.appNavItem, {
        active: filterType === id,
      })}
      onClick={() => onTaskFilterChange(id)}>
      <ListItemIcon className="Cmt-icon-root">{icon}</ListItemIcon>
      <ListItemText className="Cmt-nav-text" primary={title} />
      {count > 0 && (
        <Box component="span" className="Cmt-nav-count">
          {count}
        </Box>
      )}
    </ListItem>
  );
};

export default TaskFilterCell;
