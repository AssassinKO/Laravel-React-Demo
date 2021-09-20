import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  dialogRoot: {
    position: 'relative',
  },
  dialogTitleRoot: {
    '& .MuiTypography-h6': {
      fontSize: 16,
      color: theme.palette.common.dark,
    },
  },
  dialogActionsRoot: {
    padding: '16px 24px',
  },
}));

const ConfirmDialog = ({ open, onClose, onConfirm, title, content, btnLabels }) => {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="confirm-dialog-title" className={classes.dialogRoot}>
      <DialogTitle id="confirm-dialog-title" className={classes.dialogTitleRoot}>
        {title}
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions classes={{ root: classes.dialogActionsRoot }}>
        <Button onClick={onClose} color="primary" variant="outlined">
          {btnLabels.cancel}
        </Button>
        <Button onClick={onConfirm} color="primary" variant="contained">
          {btnLabels.confirm}
        </Button>
        {/* <div className="ml-4 mr-4">
          <Button onClick={onClose} color="primary" variant="outlined">
            {btnLabels.cancel}
          </Button>
          <Button onClick={onConfirm} color="primary" variant="contained">
            {btnLabels.confirm}
          </Button>
        </div>*/}
      </DialogActions>
    </Dialog>
  );
};

ConfirmDialog.defaultProps = {
  open: false,
  title: 'Confirm Delete',
  btnLabels: {
    cancel: 'Cancel',
    confirm: 'Confirm',
  },
};

export default React.memo(ConfirmDialog);
