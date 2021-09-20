import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  menuRoot: {
    '& .MuiMenu-list': {
      padding: 16,
      [theme.breakpoints.up('md')]: {
        padding: 24,
      },
    },
  },
  menuItemRoot: {
    borderBottom: `1px solid ${theme.palette.borderColor.main}`,
    color: theme.palette.text.disabled,
    paddingLeft: 0,
    paddingRight: 0,
    '&:hover, &.active': {
      color: theme.palette.text.primary,
      backgroundColor: 'transparent',
    },
    '& .MuiTouchRipple-root': {
      display: 'none',
    },
    '&:first-child': {
      paddingTop: 0,
    },
  },
  statusDot: {
    width: 16,
    height: 16,
    borderRadius: '50%',
    marginRight: 20,
  },
}));

const UserStatus = ({ anchorEl, userStatus, handleClose, statusColor, updateStatus }) => {
  const classes = useStyles();
  return (
    <Menu
      className={classes.menuRoot}
      id="user-status-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}>
      <MenuItem
        className={clsx(classes.menuItemRoot, {
          active: userStatus === 'Online',
        })}
        onClick={() => updateStatus('Online')}>
        <Box className={classes.statusDot} style={{ backgroundColor: '#8DCD03' }} /> Online
      </MenuItem>
      <MenuItem
        className={clsx(classes.menuItemRoot, { active: userStatus === 'Busy' })}
        onClick={() => updateStatus('Busy')}>
        <Box className={classes.statusDot} style={{ backgroundColor: '#FF8C00' }} />
        Busy
      </MenuItem>
      <MenuItem
        className={clsx(classes.menuItemRoot, {
          active: userStatus === "Don't Disturb",
        })}
        onClick={() => updateStatus("Don't Disturb")}>
        <Box className={classes.statusDot} style={{ backgroundColor: '#E00930' }} />
        Don't Disturb
      </MenuItem>
      <MenuItem
        className={clsx(classes.menuItemRoot, {
          active: userStatus === 'Offline',
        })}
        onClick={() => updateStatus('Offline')}>
        <Box className={classes.statusDot} style={{ backgroundColor: '#C1C1C1' }} />
        Offline
      </MenuItem>
    </Menu>
  );
};

export default UserStatus;
