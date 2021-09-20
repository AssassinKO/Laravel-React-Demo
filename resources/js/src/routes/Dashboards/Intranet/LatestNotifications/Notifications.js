import React, { useState } from 'react';
import NotificationItem from './NotificationItem';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CmtList from '../../../../@coremat/CmtList';
import { alpha, makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import ProjectInvitation from '../DailyFeed/ProjectInvitation';
import PhotosUploaded from '../DailyFeed/PhotosUploaded';
import SharedPost from '../DailyFeed/SharedPost';

const useStyles = makeStyles(theme => ({
  subHeaderTitle: {
    color: theme.palette.text.secondary,
    fontSize: 10,
    letterSpacing: 1.5,
  },
  feedItemView: {
    borderBottom: `1px solid ${alpha(theme.palette.common.dark, 0.1)}`,
  },
  listHeaderRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px 24px 10px',
  },
  listBtnRoot: {
    fontSize: 10,
    letterSpacing: 1.5,
  },
}));

const NotificationSnackBar = props => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      autoHideDuration={2000}
      {...props}
    />
  );
};

const feedTypes = {
  PROJECT_INVITATION: ProjectInvitation,
  PHOTOS_UPLOADED: PhotosUploaded,
  SHARED_POST: SharedPost,
};

const RenderFeedItem = ({ item, updateFeed }) => {
  const RenderContent = feedTypes[item.type];

  return <RenderContent item={item} updateFeed={updateFeed} />;
};

const contentTypes = {
  INVITATION: ProjectInvitation,
  FEEDS: RenderFeedItem,
  MESSAGES: NotificationItem,
};

const RenderRow = ({ type, item, updateNotificationItem }) => {
  const RenderItemRow = contentTypes[type];

  const onReadUnread = (notification, type) => {
    notification.status = notification.status === 'read' ? 'unread' : 'read';
    updateNotificationItem(notification, type);
  };

  return (
    <RenderItemRow
      item={item}
      updateFeed={feed => updateNotificationItem(feed, type)}
      onReadUnread={notification => onReadUnread(notification, type)}
    />
  );
};

const Notifications = ({ listsToShow, notifications }) => {
  const classes = useStyles();
  const [notificationsData, setNotificationsData] = useState(notifications);

  const getNotifications = type => {
    return notifications.find(item => item.type === type).records;
  };

  const updateNotifications = (type, notifications) => {
    setNotificationsData(
      notificationsData.map(data => {
        if (data.type === type) {
          data.records = notifications;
        }
        return data;
      }),
    );
  };

  const [openSnackBar, setSnackBarStatus] = useState(false);
  const onSnackBarClose = () => {
    setSnackBarStatus(false);
  };

  const updateNotificationItem = (notification, type) => {
    const notifications = getNotifications(type);

    const notificationsUpdated = notifications.map(item => {
      if (item.id === notification.id) {
        return notification;
      }
      return item;
    });

    updateNotifications(type, notificationsUpdated);
  };

  const getListHeading = notification => {
    return (
      <Box className={classes.listHeaderRoot}>
        <Typography className={classes.subHeaderTitle}>
          {notification.total} {notification.type}
        </Typography>
        <Box ml="auto">
          <Button
            className={classes.listBtnRoot}
            size="small"
            onClick={() => {
              setSnackBarStatus(true);
            }}
            color="primary">
            SEE ALL
          </Button>
        </Box>
      </Box>
    );
  };

  const getFilteredNotifications = () => {
    return listsToShow.length > 0 ? notifications.filter(item => listsToShow.includes(item.type)) : notifications;
  };

  return (
    <Box>
      <Box className={classes.feedItemView}>
        {getFilteredNotifications().map((row, i) => (
          <Box key={i} display="flex" flexDirection="column">
            {getListHeading(row)}
            <CmtList
              data={row.records}
              renderRow={(item, index) => (
                <RenderRow key={index} type={row.type} item={item} updateNotificationItem={updateNotificationItem} />
              )}
            />
          </Box>
        ))}
      </Box>
      <NotificationSnackBar message="You can link your route here." open={openSnackBar} onClose={onSnackBarClose} />
    </Box>
  );
};

export default Notifications;
