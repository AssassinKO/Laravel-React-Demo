import React from 'react';
import CmtMediaObject from '../../../../@coremat/CmtMediaObject';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { Tooltip } from '@material-ui/core';
import useStyles from './TaskItem.style';

const TaskItem = ({ item, updateTask, onEdit }) => {
  const handleStatus = e => {
    updateTask({ ...item, isCompleted: e.target.checked });
  };
  const classes = useStyles();

  return (
    <Box className={classes.taskItemRoot}>
      <CmtMediaObject
        avatarPos="center"
        avatar={<Checkbox checked={item.isCompleted} onChange={handleStatus} />}
        title={item.title}
        titleProps={{
          variant: 'h4',
          component: 'div',
          className: classes.titleRoot,
        }}
        subTitle={item.description}
        subTitleProps={{
          variant: 'body1',
          component: 'p',
          className: classes.subTitleRoot,
        }}
        actionsComponent={
          <Box className={classes.actionRoot}>
            <Tooltip title="Edit">
              <IconButton size="medium" className={classes.iconBtn} onClick={onEdit}>
                <EditIcon />
              </IconButton>
            </Tooltip>
            {item.unreadComments > 0 && (
              <Box component="span" className={classes.badgeRoot}>
                {item.unreadComments}
              </Box>
            )}
          </Box>
        }
      />
    </Box>
  );
};

export default TaskItem;
