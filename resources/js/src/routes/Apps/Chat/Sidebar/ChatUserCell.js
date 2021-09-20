import React from 'react';
import { Badge, Box } from '@material-ui/core';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import { alpha, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  chatCellItem: {
    padding: 16,
    borderBottom: `1px solid ${theme.palette.borderColor.main}`,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover, &.active': {
      backgroundColor: alpha(theme.palette.common.dark, 0.04),
      '& $titleRoot': {
        color: theme.palette.primary.main,
      },
    },
  },
  chatCellInfo: {
    width: 'calc(100% - 40px)',
    paddingLeft: 16,
  },
  titleRoot: {
    position: 'relative',
  },
  chatDesRoot: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontSize: 12,
    color: theme.palette.text.secondary,
    paddingRight: 10,
    width: 'calc(100% - 24px)',
  },
  navCount: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.common.white,
    padding: 2,
    borderRadius: '50%',
    marginLeft: 'auto',
    width: 24,
    height: 24,
    textAlign: 'center',
    lineHeight: '19px',
  },
  chatAvatarRoot: {
    position: 'relative',
  },
  statusDot: {
    position: 'relative',
    '& .MuiBadge-badge': {
      width: 10,
      height: 10,
      borderRadius: '50%',
      border: `solid 1px ${theme.palette.common.white}`,
      position: 'absolute',
      right: 4,
      top: 6,
      zIndex: 1,
    },
  },
  badgeOnline: {
    backgroundColor: '#8DCD03',
  },
  badgeAway: {
    backgroundColor: '#FF8C00',
  },
  badgeOffline: {
    backgroundColor: '#C1C1C1',
  },
}));

const ChatUserCell = ({ data, currentUser, onContactSelect }) => {
  const classes = useStyles();

  const getBadgeStatusClass = () => {
    if (data.status === 'online') {
      return classes.badgeOnline;
    }

    if (data.status === 'away') {
      return classes.badgeAway;
    }

    return classes.badgeOffline;
  };

  return (
    <Box
      className={clsx(classes.chatCellItem, {
        active: currentUser && currentUser.id === data.id,
      })}
      onClick={() => onContactSelect(data)}>
      <Box className={classes.chatAvatarRoot}>
        <Badge classes={{ root: classes.statusDot, badge: getBadgeStatusClass() }} variant="dot">
          <CmtAvatar size={40} src={data.profile_pic} alt={data.name} />
        </Badge>
      </Box>
      <Box className={classes.chatCellInfo}>
        <Box display="flex" alignItems="center">
          <Typography component="div" variant="subtitle2" className={classes.titleRoot}>
            {data.name}
          </Typography>
          <Box color="text.secondary" fontSize={12} ml="auto">
            {data.lastMessageTime}
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography className={classes.chatDesRoot}>{data.lastMessage}</Typography>
          {data.unreadMessage && (
            <Box component="span" className={classes.navCount}>
              {data.unreadMessage}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ChatUserCell;
