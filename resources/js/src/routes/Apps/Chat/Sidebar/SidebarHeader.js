import React from 'react';
import { Box, InputBase, Typography } from '@material-ui/core';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import clsx from 'clsx';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './SidebarHeader.style';
import Popover from '@material-ui/core/Popover';
import ProfileDetail from './ProfileDetail';

const SidebarHeader = ({ searchText, setSearchText }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [userStatus, setUserStatus] = React.useState('Online');

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
  const open = Boolean(anchorEl);
  const classes = useStyles({ statusColor: getStatusColor() });
  const id = open ? 'user-popover' : undefined;
  return (
    <Box className={classes.sidebarHeaderRoot}>
      <Box className={classes.userRoot}>
        <Box onClick={handleClick} className={classes.avatarRoot}>
          <CmtAvatar size={56} src={'https://via.placeholder.com/150'} />
          <Box className={classes.statusDot} />
        </Box>
        <Box className={clsx(classes.userInfo, 'Cmt-user-info')}>
          <Typography className={classes.userTitle} component="h3" variant="h6">
            Robert Johnson
          </Typography>
          <Typography className={classes.userSubTitle} component="span">
            Life is short, enjoy it well
          </Typography>
        </Box>
      </Box>
      <Box className={classes.searchRoot}>
        <InputBase
          placeholder={'Search here...'}
          inputProps={{ 'aria-label': 'search' }}
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        <SearchIcon />
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}>
        <Box p={{ xs: 4, md: 6 }}>
          <Box className={classes.userRoot}>
            <CmtAvatar size={56} src={'https://via.placeholder.com/150'} onClick={handleClick} />
            <Box className={clsx(classes.userInfo, 'Cmt-user-info')}>
              <Typography className={classes.userTitle} component="h3" variant="h6">
                Robert Johnson
              </Typography>
              <Typography className={classes.userSubTitle} component="span">
                Life is short, enjoy it well
              </Typography>
            </Box>
          </Box>
          <ProfileDetail userStatus={userStatus} setUserStatus={setUserStatus} statusColor={getStatusColor()} />
        </Box>
      </Popover>
    </Box>
  );
};

export default SidebarHeader;
