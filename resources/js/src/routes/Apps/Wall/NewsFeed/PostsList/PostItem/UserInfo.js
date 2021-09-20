import React from 'react';
import Box from '@material-ui/core/Box';
import CmtAvatar from '../../../../../../@coremat/CmtAvatar';
import Typography from '@material-ui/core/Typography';
import { getTimeDiffString } from '../../../../../../@jumbo/utils/dateHelper';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Popper from '@material-ui/core/Popper';
import CmtCard from '../../../../../../@coremat/CmtCard';

const useStyles = makeStyles(theme => ({
  titleRoot: {
    letterSpacing: 1.25,
  },
  subTitleRoot: {
    fontSize: 12,
    color: theme.palette.text.disabled,
  },
}));

const UserInfo = ({ user, date }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openPopper = event => {
    setAnchorEl(event.currentTarget);
  };

  const closePopper = event => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? `user-popper-${user.id}` : undefined;

  return (
    <Box display="flex" alignItems="center">
      <Box mr={4} onMouseEnter={openPopper} onMouseLeave={closePopper} aria-describedby={id}>
        <CmtAvatar size={40} src={user.profile_pic} alt={user.name} />

        <Popper id={id} open={open} anchorEl={anchorEl}>
          <CmtCard>
            <Box display="flex" alignItems="center" p={3}>
              <Box mr={4}>
                <CmtAvatar size={40} src={user.profile_pic} alt={user.name} />
              </Box>
              <Box>
                <Typography className={classes.titleRoot} component="div" variant="h5">
                  {user.name}
                </Typography>
                <Typography className={classes.subTitleRoot}>{getTimeDiffString(date)}</Typography>
              </Box>
            </Box>
          </CmtCard>
        </Popper>
      </Box>
      <Box>
        <Typography className={classes.titleRoot} component="div" variant="h5">
          {user.name}
        </Typography>
        <Typography className={classes.subTitleRoot}>{getTimeDiffString(date)}</Typography>
      </Box>
    </Box>
  );
};

export default UserInfo;

UserInfo.prototype = {
  user: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
};
