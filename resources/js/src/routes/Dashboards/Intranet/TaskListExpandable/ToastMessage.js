import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

const ToastMessage = ({ open, onClose, message }) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      message={message}
    />
  );
};

export default ToastMessage;
