import React from 'react';
import CmtAdvCard from '../../../../@coremat/CmtAdvCard';
import CmtAdvCardContent from '../../../../@coremat/CmtAdvCard/CmtAdvCardContent';
import CmtObjectSummary from '../../../../@coremat/CmtObjectSummary';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import { classicWidget } from '../../../../@fake-db';
import CmtImage from '../../../../@coremat/CmtImage';
import UserInfo from './UserInfo';
import makeStyles from '@material-ui/core/styles/makeStyles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from 'clsx';

const actions = [
  {
    label: 'View Profile',
  },
  {
    label: 'Send Message',
  },
  {
    label: 'Add to Favorite',
  },
];

const useStyles = makeStyles(theme => ({
  cardRoot: {
    position: 'relative',
    '& .Cmt-header-root': {
      paddingBottom: 0,
    },
  },
  userDetailRoot: {
    position: 'relative',
    width: 112,
    height: 112,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 25,
  },
  cardTitleRoot: {
    marginBottom: 24,
    '& .Cmt-badge-avatar': {
      padding: 5,
      borderRadius: '50%',
    },
    '& .Cmt-badge': {
      padding: 0,
      backgroundColor: 'transparent',
      marginBottom: -36,
      marginLeft: -15,
    },
    '& .Cmt-user-info': {
      marginTop: 15,
      '& .title': {
        fontSize: 16,
        fontWeight: theme.typography.fontWeightBold,
      },
    },
  },
  cirProRoot: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1,
  },
  cirProGrey: {
    color: theme.palette.grey[200],
  },
  avatarRoot: {
    border: `solid 2px ${theme.palette.common.white}`,
    marginTop: -125,
    marginBottom: 13,
  },
}));

const UserDetail = () => {
  const { userDetails } = classicWidget;
  const classes = useStyles();
  return (
    <CmtAdvCard className={classes.cardRoot}>
      <CmtCardHeader
        icon={<CmtImage src={userDetails.badge} alt="Badge" />}
        actionsPos="top-corner"
        actions={actions}
        actionHandleIcon={<MoreVertIcon />}
      />
      <CmtAdvCardContent>
        <Box className={classes.userDetailRoot}>
          <CircularProgress
            className={clsx(classes.cirProRoot, classes.cirProGrey)}
            variant="determinate"
            color="secondary"
            size={112}
            value={100}
            thickness={2}
          />
          <CircularProgress
            className={classes.cirProRoot}
            variant="determinate"
            color="primary"
            size={112}
            value={70}
            thickness={2}
          />
        </Box>
        <Box className={classes.cardTitleRoot}>
          <CmtObjectSummary
            avatar={
              <CmtAvatar className={classes.avatarRoot} size={90} src={userDetails.profile_pic} alt={userDetails.name} />
            }
            title={userDetails.name}
            titleProps={{
              style: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
            }}
            subTitle={userDetails.job_title}
            align="vertical"
          />
        </Box>
        <UserInfo userDetails={userDetails} />
      </CmtAdvCardContent>
    </CmtAdvCard>
  );
};

export default UserDetail;
