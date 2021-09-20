import React, { useContext, useState } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import { coremat } from '../../../../@fake-db';
import CmtMediaObject from '../../../../@coremat/CmtMediaObject';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Box, Button, IconButton, makeStyles, Tooltip, Typography } from '@material-ui/core';
import { alpha } from '@material-ui/core/styles';
import CmtList from '../../../../@coremat/CmtList';
import CmtNotificationItem from '../../../../@coremat/CmtNotifications/CmtNotificationItem';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import clsx from 'clsx';
import CmtCard from '../../../../@coremat/CmtCard';

const useStyles = makeStyles(theme => ({
  headingRoot: {
    padding: '10px 24px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: `1px solid ${theme.palette.borderColor.main}`,
  },
  notificationRoot: {
    padding: '5px 24px',
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.08),
    },
    '& .MuiSvgIcon-root': {
      fontSize: 18,
    },
  },
  notificationRead: {
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
  },
  textSm: {
    fontSize: 12,
  },
}));

const RenderRow = ({ notification, onReadUnread, showExtraMedia }) => {
  const classes = useStyles();
  const { name, avatar, content, time, media, status } = notification;

  return (
    <CmtNotificationItem
      className={clsx(classes.notificationRoot, {
        [classes.notificationRead]: status === 'read',
      })}
      content={
        <CmtMediaObject
          style={{
            alignItems: 'center',
          }}
          avatar={avatar}
          avatarPos="center"
          avatarProps={{
            style: { height: 48, width: 48, marginRight: 16 },
          }}
          title={
            <Typography component="h5" variant="body2">
              <Typography component="span" variant="body2">
                {content}
              </Typography>
              <Typography className="pointer" component="span" color="primary" variant="body2">
                {name}
              </Typography>
            </Typography>
          }
          subTitle={
            <Box display="flex" alignItems="center" mt={1}>
              <Typography component="span" variant="body2" color="textSecondary" className={classes.textSm}>
                {time} ago
              </Typography>
            </Box>
          }
          footerComponent={
            media &&
            showExtraMedia && (
              <CmtAvatar
                src={media}
                variant="square"
                style={{
                  height: 48,
                  width: 48,
                }}
              />
            )
          }
        />
      }
      readState={status === 'read'}
      onReadUnread={() => onReadUnread(notification)}
      actionMenu={
        <Tooltip title="More Options">
          <IconButton size="small">
            <MoreHorizIcon />
          </IconButton>
        </Tooltip>
      }
    />
  );
};

const NotificationView = () => {
  const classes = useStyles();
  const { showFooter, loadMore, showExtraMedia } = useContext(CorematContext);
  const [data, setData] = useState(coremat.notifications);

  const markAllAsRead = () => {
    setData(
      data.map(item => {
        item.status = 'read';
        return item;
      }),
    );
  };

  const handleReadUnread = notification => {
    notification.status = notification.status === 'read' ? 'unread' : 'read';

    setData(
      data.map(item => {
        if (item.id === notification.id) {
          return notification;
        }

        return item;
      }),
    );
  };

  return (
    <CmtCard>
      <Box className={classes.headingRoot}>
        <Box component="h3" color="text.primary" my={0}>
          Notification
        </Box>
        <Box ml="auto">
          <Button color="primary" size="small" onClick={markAllAsRead}>
            Mark all as read
          </Button>
          <Button color="primary" size="small" style={{ marginLeft: 4 }}>
            Settings
          </Button>
        </Box>
      </Box>

      <PerfectScrollbar style={{ height: 350 }}>
        <CmtList
          data={data}
          renderRow={(item, index) => (
            <RenderRow notification={item} key={index} onReadUnread={handleReadUnread} showExtraMedia={showExtraMedia} />
          )}
          onEndReached={() => {}}
          footerProps={
            showFooter
              ? {
                  loading: loadMore,
                  footerText: 'No More Notifications',
                }
              : null
          }
        />
      </PerfectScrollbar>
    </CmtCard>
  );
};

export default NotificationView;
