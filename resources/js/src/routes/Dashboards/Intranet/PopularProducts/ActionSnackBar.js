import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

const ActionSnackBar = ({ onUndoAction, ...rest }) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      autoHideDuration={5000}
      {...rest}
    />
  );
};

export default React.memo(ActionSnackBar);
