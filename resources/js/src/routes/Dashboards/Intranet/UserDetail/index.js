import React from 'react';
import CmtAdvCard from '../../../../@coremat/CmtAdvCard';
import CmtAdvCardContent from '../../../../@coremat/CmtAdvCard/CmtAdvCardContent';
import CmtCardMedia from '../../../../@coremat/CmtCard/CmtCardMedia';
import CmtObjectSummary from '../../../../@coremat/CmtObjectSummary';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import { intranet } from '../../../../@fake-db';
import CmtImage from '../../../../@coremat/CmtImage';
import UserInfo from './UserInfo';
import { alpha, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
  actionMenu: {
    '& button': {
      backgroundColor: 'transparent',
      color: theme.palette.common.white,
      '&:hover, &:focus': {
        backgroundColor: 'transparent',
        color: theme.palette.common.white,
      },
    },
  },
  cardMediaRoot: {
    position: 'relative',
    marginBottom: 0,
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: alpha(theme.palette.common.black, 0.6),
    },
    '& > *': {
      position: 'relative',
      zIndex: 2,
    },
  },
  cardMediaContent: {
    padding: '40px 24px',
    position: 'relative',
    zIndex: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    '& .Cmt-badge-avatar': {
      border: `solid 2px ${theme.palette.success.main}`,
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
      '& .Cmt-title': {
        fontSize: 16,
        fontWeight: theme.typography.fontWeightBold,
      },
    },
  },
  avatarRoot: {
    border: `solid 2px ${theme.palette.common.white}`,
  },
}));

const UserDetail = () => {
  const { userDetails } = intranet;
  const classes = useStyles();
  return (
    <CmtAdvCard
      actionsPos="top-corner"
      actions={actions}
      actionHandleIcon={<MoreVertIcon />}
      actionMenuClassName={classes.actionMenu}>
      <CmtCardMedia className={classes.cardMediaRoot} image={'https://via.placeholder.com/350x200'}>
        <Box className={classes.cardMediaContent}>
          <CmtObjectSummary
            avatar={
              <CmtAvatar className={classes.avatarRoot} size={56} src={userDetails.profile_pic} alt={userDetails.name} />
            }
            title={userDetails.name}
            titleProps={{ style: { color: '#fff' } }}
            subTitle={userDetails.job_title}
            subTitleProps={{ style: { color: '#fff' } }}
            showItemBadge={false}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            avatarProps={{ variant: 'circle' }}
            badge={<CmtImage src={userDetails.badge} alt="Badge" />}
            align="vertical"
          />
        </Box>
      </CmtCardMedia>
      <CmtAdvCardContent>
        <UserInfo userDetails={userDetails} />
      </CmtAdvCardContent>
    </CmtAdvCard>
  );
};

export default UserDetail;
