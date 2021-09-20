import React from 'react';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  socialStatsRoot: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    borderBottom: `1px solid ${theme.palette.borderColor.main}`,
    paddingBottom: 22,
  },
  socialStatsItem: {
    paddingLeft: 12,
    paddingRight: 12,
    cursor: 'pointer',
    width: '33.33%',
    '&:not(:first-child)': {
      borderLeft: `1px solid ${theme.palette.borderColor.main}`,
    },
  },
}));

const SocialStats = ({ userDetail }) => {
  const { followers, following, friends } = userDetail;
  const classes = useStyles();
  return (
    <Box className={classes.socialStatsRoot}>
      <Box className={classes.socialStatsItem}>
        <Typography component="div" variant="h3">
          {followers > 2000 ? '2k+' : followers}
        </Typography>
        <Box component="span" color="text.secondary" fontSize={12}>
          Followers
        </Box>
      </Box>
      <Box className={classes.socialStatsItem}>
        <Typography component="div" variant="h3">
          {following}
        </Typography>
        <Box component="span" color="text.secondary" fontSize={12}>
          Following
        </Box>
      </Box>
      <Box className={classes.socialStatsItem}>
        <Typography component="div" variant="h3">
          {friends.total}
        </Typography>
        <Box component="span" color="text.secondary" fontSize={12}>
          Friends
        </Box>
      </Box>
    </Box>
  );
};

export default SocialStats;

SocialStats.prototype = {
  userDetail: PropTypes.object.isRequired,
};
