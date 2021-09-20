import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';

const ActionSnackBar = ({ onUndoAction, ...rest }) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      autoHideDuration={5000}
      action={
        <Button color="secondary" size="small" onClick={onUndoAction}>
          UNDO
        </Button>
      }
      {...rest}
    />
  );
};

export default ActionSnackBar;
