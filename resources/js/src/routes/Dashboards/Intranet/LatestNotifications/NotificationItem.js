import CmtNotificationItem from '../../../../@coremat/CmtNotifications/CmtNotificationItem';
import CmtMediaObject from '../../../../@coremat/CmtMediaObject';
import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import ListIcon from '@material-ui/icons/List';

const useStyles = makeStyles(theme => ({
  notificationItemRoot: {
    position: 'relative',
    padding: '10px 24px',
    transition: 'all .2s',
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.08),
      transform: 'translateY(-4px)',
      boxShadow: `0 3px 10px 0 ${alpha(theme.palette.common.dark, 0.2)}`,
    },
    '&:not(:first-child)': {
      borderTop: `0 none`,
    },
    '& .Cmt-media-image': {
      alignSelf: 'center',
      marginTop: 0,
    },
    '& .Cmt-dot-btn': {
      color: theme.palette.primary.main,
    },
  },
  titleRoot: {
    fontSize: 14,
  },
  subTitleRoot: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 14,
    '& .MuiSvgIcon-root': {
      fontSize: 16,
    },
  },
}));

const NotificationItem = ({ item, onReadUnread }) => {
  const { name, avatar, content, time, status } = item;
  const classes = useStyles();
  return (
    <CmtNotificationItem
      className={classes.notificationItemRoot}
      content={
        <CmtMediaObject
          style={{
            alignItems: 'center',
          }}
          avatar={avatar}
          avatarPos="center"
          avatarProps={{
            style: { height: 50, width: 50 },
          }}
          title={
            <Typography className={classes.titleRoot}>
              <Box component="span">{content}</Box>
              <Box component="span" color="primary.main">
                {name}
              </Box>
            </Typography>
          }
          subTitle={
            <Typography className={classes.subTitleRoot}>
              <ListIcon />
              <Box component="span" ml={2}>
                {time}
              </Box>
            </Typography>
          }
        />
      }
      readState={status === 'read'}
      onReadUnread={() => onReadUnread(item)}
    />
  );
};

export default NotificationItem;
