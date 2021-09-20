import React from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import { Box } from '@material-ui/core';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import { modernWidget } from '../../../../@fake-db/widgets/modern';

const useStyles = makeStyles(() => ({
  cardRoot: {
    height: '100%',
    minHeight: 120,
  },
  userBoxRoot: {
    width: 130,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: -34,
      left: -55,
      width: 185,
      height: 185,
      backgroundColor: '#00C4B4',
      borderRadius: '50%',
    },
    '& > div': {
      boxShadow: '0 6px 4px 2px rgba(0,0,0,.2)',
    },
  },
}));

const UserSummery = () => {
  const classes = useStyles();
  const { userSummary } = modernWidget;

  return (
    <CmtCard className={classes.cardRoot}>
      <Box display="flex" alignItems="center" height={1}>
        <Box className={classes.userBoxRoot}>
          <CmtAvatar size={75} src={userSummary.profile_pic} />
        </Box>
        <Box ml={{ xs: 5, xl: 8 }}>
          <Typography component="div" variant="h4">
            {userSummary.name}
          </Typography>
          <Box mt={1} color="text.secondary" component="p">
            {userSummary.username}
          </Box>
          <Box component="p">{userSummary.position}</Box>
        </Box>
      </Box>
    </CmtCard>
  );
};

export default UserSummery;
