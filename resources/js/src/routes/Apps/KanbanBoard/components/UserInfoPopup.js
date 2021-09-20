import React from 'react';
import Popper from '@material-ui/core/Popper';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import DateRangeIcon from '@material-ui/icons/DateRange';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import { Button } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

import CmtAvatar from '../../../../@coremat/CmtAvatar';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtObjectSummary from '../../../../@coremat/CmtObjectSummary';

const useStyles = makeStyles(theme => ({
  popperRoot: {
    backgroundColor: theme.palette.popupColor.main,
    cursor: 'pointer',
    borderRadius: 4,
    zIndex: 2,
  },
  cardRoot: {
    backgroundColor: 'transparent',
  },
  blockRoot: {
    display: 'block',
  },
}));

const UserInfoPopup = ({ user, children, ...rest }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const onOpenUserInfoPopup = event => setAnchorEl(event.currentTarget);
  const onCloseUserInfoPopup = () => setAnchorEl(null);

  return (
    <div onMouseEnter={onOpenUserInfoPopup} onMouseLeave={onCloseUserInfoPopup}>
      {children}
      <Popper
        id="user-info-popover"
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        placement="top-start"
        className={classes.popperRoot}
        onClose={onCloseUserInfoPopup}
        {...rest}>
        <CmtCard className={classes.cardRoot}>
          <Box p={3}>
            <CmtObjectSummary
              avatar={<CmtAvatar size={40} src={user.profilePic} alt={user.name} />}
              title={user.name}
              subTitle={user.email}
              showItemBadge={false}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              align={'horizontal'}
            />
          </Box>

          <Divider />

          <Box py={2} px={3} display="flex" alignItems="center" justifyContent="space-between">
            <Box flex={1} style={{ cursor: 'pointer' }}>
              <Button color="primary">Add To Contact</Button>
            </Box>
            <Box ml={1} display="flex" alignItems="center">
              <IconButton>
                <DateRangeIcon className={classes.blockRoot} />
              </IconButton>
              <IconButton edge="end">
                <MailIcon className={classes.blockRoot} />
              </IconButton>
            </Box>
          </Box>
        </CmtCard>
      </Popper>
    </div>
  );
};

export default UserInfoPopup;
