import React from 'react';
import { IconButton, Popover } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Cancel, Delete } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  confirmText: { padding: '8px 12px' },
  confirmActions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 12px 8px 12px',
    '& > button': {
      fontSize: 10,
    },
    '& > :not(:first-child)': {
      marginLeft: 4,
    },
  },
}));

const DeleteConfirmation = ({ anchorEl, content, onClose, onConfirm, ...rest }) => {
  const classes = useStyles();

  return (
    <Popover
      id="confirm-popover"
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...rest}>
      <p className={classes.confirmText}>{content || 'Are you confirm to delete?'}</p>
      <div className={classes.confirmActions}>
        <IconButton size="small" onClick={onConfirm}>
          <Delete fontSize="small" color="primary" />
        </IconButton>

        <IconButton size="small" onClick={onClose}>
          <Cancel fontSize="small" />
        </IconButton>
      </div>
    </Popover>
  );
};

export default DeleteConfirmation;
