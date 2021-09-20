import React from 'react';
import { Box } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CloseIcon from '@material-ui/icons/Close';
import ListItemText from '@material-ui/core/ListItemText';
import FlagIcon from '@material-ui/icons/Flag';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import DialpadIcon from '@material-ui/icons/Dialpad';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import clsx from 'clsx';
import UserStatus from './UserStatus';

const useStyles = makeStyles(theme => ({
  profileListRoot: {
    position: 'relative',
    '& li': {
      borderBottom: `1px solid ${theme.palette.borderColor.main}`,
      '&.MuiListItem-gutters': {
        padding: '10px 0',
      },
      '& .MuiListItem-gutters': {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 0,
      },
      '& .MuiTypography-body2': {
        fontSize: 16,
      },
    },
  },
  signOutRoot: {
    borderBottom: '0 none !important',
    fontSize: 14,
    letterSpacing: 1.25,
    textTransform: 'uppercase',
    cursor: 'pointer',
    paddingTop: '20px !important',
    paddingBottom: '0 !important',
    '& .MuiListItemText-primary': {
      color: `${theme.palette.text.secondary} !important`,
    },
  },
  textColor: {
    '& span': {
      color: theme.palette.text.secondary,
    },
  },
  listIconRoot: {
    minWidth: 10,
    marginRight: 20,
    '& .MuiSvgIcon-root': {
      fontSize: 18,
    },
  },
  listItemAction: {
    right: 0,
    '& .MuiIconButton-root, & .MuiSvgIcon-root': {
      fontSize: 18,
    },
  },
  profilelistTitle: {
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    color: theme.palette.text.secondary,
    paddingTop: 14,
    paddingBottom: 8,
  },
  personalListRoot: {
    paddingTop: 0,
    paddingBottom: 0,
    '& li': {
      alignItems: 'flex-end',
      '& .MuiListItemText-multiline': {
        margin: 0,
      },
      '& .MuiListItemText-primary': {
        color: theme.palette.text.disabled,
        fontSize: 12,
        letterSpacing: 0.4,
      },
    },
    '& $listIconRoot': {
      marginBottom: 2,
    },
  },
  statusDot: {
    width: 16,
    height: 16,
    backgroundColor: props => props.statusColor,
    borderRadius: '50%',
  },
}));

const ProfileDetail = ({ userStatus, statusColor, setUserStatus }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const updateStatus = status => {
    setAnchorEl(null);
    setUserStatus(status);
  };

  const getStatusColor = () => {
    switch (userStatus) {
      case 'Online':
        return '#8DCD03';
      case 'Busy':
        return '#FF8C00';
      case "Don't Disturb":
        return '#E00930';
      default:
        return '#C1C1C1';
    }
  };

  const classes = useStyles({ statusColor });
  return (
    <Box>
      <List dense className={classes.profileListRoot}>
        <ListItem className="pointer" onClick={handleClick}>
          <ListItemIcon className={classes.listIconRoot}>
            <Box className={classes.statusDot} />
          </ListItemIcon>
          <ListItemText className={classes.textColor} primary={userStatus} />
        </ListItem>
        <ListItem className="pointer">
          <ListItemIcon className={classes.listIconRoot}>
            <FlagIcon />
          </ListItemIcon>
          <ListItemText className={classes.textColor} primary="Life is short, enjoy it well" />
          <ListItemSecondaryAction className={classes.listItemAction}>
            <IconButton edge="end" aria-label="delete">
              <CloseIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem className="pointer">
          <ListItemIcon className={classes.listIconRoot}>
            <DialpadIcon />
          </ListItemIcon>
          <ListItemText className={classes.textColor} primary="My Account" />
        </ListItem>
        <ListItem className="pointer">
          <ListItemIcon className={classes.listIconRoot}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText className={classes.textColor} primary="Settings" />
        </ListItem>
      </List>

      <Typography className={classes.profilelistTitle}>Personal Detail</Typography>

      <List dense className={clsx(classes.profileListRoot, classes.personalListRoot)}>
        <ListItem>
          <ListItemIcon className={classes.listIconRoot}>
            <PermIdentityIcon />
          </ListItemIcon>
          <ListItemText className={classes.textColor} primary="Name" secondary="Savannah Nguyen" />
        </ListItem>
        <ListItem>
          <ListItemIcon className={classes.listIconRoot}>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText className={classes.textColor} primary="Username" secondary="savanah.naguyen21" />
        </ListItem>
        <ListItem>
          <ListItemIcon className={classes.listIconRoot}>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText className={classes.textColor} primary="Email Address" secondary="savanah.mail@gmail.com" />
        </ListItem>
        <ListItem>
          <ListItemIcon className={classes.listIconRoot}>
            <DialpadIcon />
          </ListItemIcon>
          <ListItemText className={classes.textColor} primary="Phone Number" secondary="(022) 245 877 7896 " />
        </ListItem>
        <ListItem className={classes.signOutRoot}>
          <ListItemText className={classes.textColor} primary="Sign Out" />
        </ListItem>
      </List>
      <UserStatus
        anchorEl={anchorEl}
        handleClose={handleClose}
        updateStatus={updateStatus}
        statusColor={getStatusColor()}
        userStatus={userStatus}
      />
    </Box>
  );
};

export default ProfileDetail;
