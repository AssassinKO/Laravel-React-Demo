import React from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import { Box } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CmtImage from '../../../../@coremat/CmtImage';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import { modernWidget } from '../../../../@fake-db/widgets/modern';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    height: '100%',
    position: 'relative',
    '&:hover $actionHoverRoot': {
      left: -25,
    },
  },
  userImgRoot: {
    width: 120,
    height: 120,
    '& img': {
      height: '100%',
    },
  },
  actionRoot: {
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
    height: '100%',
    width: 25,
    color: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '& > .MuiSvgIcon-root': {
      marginLeft: -15,
    },
  },
  actionHoverRoot: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 140,
    height: 140,
    borderRadius: '50%',
    position: 'absolute',
    left: 10,
    top: -9,
    zIndex: 1,
    padding: 12,
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
}));

const UserSummery2 = () => {
  const classes = useStyles();
  const { userSummary2 } = modernWidget;

  return (
    <CmtCard className={classes.cardRoot}>
      <Box display="flex" alignItems="center" height={1}>
        <Box className={classes.userImgRoot}>
          <CmtImage src={userSummary2.profile_pic} />
        </Box>
        <Box ml={{ xs: 5, xl: 8 }}>
          <Typography component="div" variant="h4">
            {userSummary2.name}
          </Typography>
          <Box mt={1} color="text.secondary" component="p">
            {userSummary2.username}
          </Box>
          <Box component="p">{userSummary2.position}</Box>
        </Box>
        <Box className={classes.actionRoot}>
          <MoreVertIcon style={{ color: '#6200EE' }} />
          <Box className={classes.actionHoverRoot}>
            <ArrowForwardIcon style={{ color: '#fff' }} />
          </Box>
        </Box>
      </Box>
    </CmtCard>
  );
};

export default UserSummery2;
