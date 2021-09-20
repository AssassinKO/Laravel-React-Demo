import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import CmtList from '../../../../@coremat/CmtList';
import { users } from '../../../../@fake-db/apps/todo';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AppRadioButton from '../../../../@jumbo/components/Common/formElements/AppRadioButton';
import AppTextInput from '../../../../@jumbo/components/Common/formElements/AppTextInput';

const useStyles = makeStyles(theme => ({
  dialogRoot: {
    '& .MuiDialog-paperWidthSm': {
      width: 340,
      [theme.breakpoints.up('sm')]: {
        width: 440,
      },
    },
  },
  titleRoot: {
    borderBottom: `1px solid ${theme.palette.borderColor.main}`,
    paddingBottom: 16,
  },
  listItemRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 24px',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 12,
      paddingBottom: 12,
    },
  },
  avatarRoot: {
    marginRight: 10,
    [theme.breakpoints.up('sm')]: {
      width: 56,
      height: 56,
      marginRight: 16,
    },
  },
  btnDisablColor: {
    color: theme.palette.text.disabled,
  },
  listItemTitleRoot: {
    fontWeight: theme.typography.fontWeightRegular,
    marginBottom: 5,
    letterSpacing: 0.15,
    marginLeft: 2,
  },
  listItemMailRoot: {
    fontSize: 14,
    color: theme.palette.text.secondary,
    letterSpacing: 0.25,
  },
  dialogActionsRoot: {
    paddingLeft: 24,
    paddingRight: 24,
  },
}));

const AssignTo = ({ assigned, handleClose, open, onAssignTo }) => {
  const [assignedTo, setAssignedTo] = useState(assigned ? assigned : {});
  const classes = useStyles();
  return (
    <Dialog className={classes.dialogRoot} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">
        <Typography className={classes.titleRoot} component="div" variant="body1">
          Assign to
        </Typography>
      </DialogTitle>
      <CmtList
        data={users}
        renderRow={item => (
          <Box component="div" className={classes.listItemRoot} key={item.id}>
            <CmtAvatar className={classes.avatarRoot} src={item.profilePic} />
            <Box>
              <Typography component="div" variant="h4" className={classes.listItemTitleRoot}>
                {item.name}
              </Typography>
              <Typography component="div" variant="h4" className={classes.listItemMailRoot}>
                {item.email}
              </Typography>
            </Box>

            <Box ml="auto">
              <AppRadioButton checked={assignedTo.id === item.id} onChange={() => setAssignedTo(item)} />
            </Box>
          </Box>
        )}
      />

      <Box className={classes.listItemRoot}>
        <CmtAvatar className={classes.avatarRoot}>
          <PersonAddIcon />
        </CmtAvatar>
        <AppTextInput value="" placeholder="Type name or email address to" />
      </Box>

      <DialogActions className={classes.dialogActionsRoot}>
        <Button onClick={handleClose} className={classes.btnDisablColor}>
          Cancel
        </Button>
        <Button
          onClick={() => {
            handleClose();
            onAssignTo(assignedTo);
          }}
          color="primary">
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AssignTo;
