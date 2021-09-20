import React from 'react';
import { Box, Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import clsx from 'clsx';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useSelector } from 'react-redux';
import CmtDropdownMenu from '../../../../@coremat/CmtDropdownMenu';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '15px 16px',
  },
  userInfo: {
    marginLeft: 16,
    transition: 'all 0.3s ease',
    opacity: 1,
    visibility: 'visible',
  },
  userTitle: {
    color: theme.palette.text.primary,
    marginBottom: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    '& .MuiSvgIcon-root': {
      marginLeft: 16,
    },
  },
}));

const items = [{ label: 'Account' }, { label: 'Setting' }, { label: 'Logout' }];

const SidebarHeader = () => {
  const classes = useStyles();
  const { currentUser } = useSelector(({ taskList }) => taskList);

  return (
    <CmtDropdownMenu
      items={items}
      TriggerComponent={
        <Box className={classes.root}>
          <CmtAvatar size={40} src={currentUser.profilePic} />
          <Box className={clsx(classes.userInfo, 'Cmt-user-info')}>
            <Typography className={classes.userTitle} component="h3" variant="h6">
              {currentUser.name} <ArrowDropDownIcon />
            </Typography>
          </Box>
        </Box>
      }
    />
  );
};

export default SidebarHeader;
