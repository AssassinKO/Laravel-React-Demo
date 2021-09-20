import React from 'react';
import { NavLink } from 'react-router-dom';

import MessageIcon from '@material-ui/icons/Message';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  navLink: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 8,
    color: theme.palette.text.secondary,
  },
  iconRoot: {
    fontSize: 18,
    marginRight: 10,
  },
  titleSpace: {
    marginBottom: 20,
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.up('sm')]: {
      marginTop: 15,
    },
  },
}));

const GeneralInfo = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography component="div" variant="h5" className={classes.titleSpace}>
        You Have
      </Typography>

      <NavLink className={classes.navLink} to="#messages">
        <MessageIcon className={classes.iconRoot} /> 5 Unread messages
      </NavLink>
      <NavLink className={classes.navLink} to="#invitations">
        <MailOutlineIcon className={classes.iconRoot} /> 2 Pending invitations
      </NavLink>
      <NavLink className={classes.navLink} to="#tasks">
        <CheckCircleIcon className={classes.iconRoot} /> 7 Due Tasks
      </NavLink>
      <NavLink className={classes.navLink} to="#notifications">
        <NotificationsIcon className={classes.iconRoot} /> 3 Other notifications
      </NavLink>
    </div>
  );
};

export default GeneralInfo;
