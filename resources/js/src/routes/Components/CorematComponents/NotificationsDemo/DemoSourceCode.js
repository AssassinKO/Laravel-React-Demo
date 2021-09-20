import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import { SourceCodeComponent } from '../../../../@jumbo/components/CorematDemosComponents';

const DemoSourceCode = () => {
  const { showFooter, loadMore, showExtraMedia } = useContext(CorematContext);

  const getFooterCode = () => {
    if (showFooter) {
      return `
  footerProps={
    {
      loading: ${loadMore},
      footerText: 'No more content',
    }
  }`;
    }

    return '';
  };

  const getSourceCode = () => {
    return (
      `
const [data, setData] = useState(notifications);

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

<Box>
  <Box className={classes.headingRoot}>
    <Box component="h3" color="text.primary" my={0}>
      Notification
    </Box>
    <Box ml="auto">
      <Button color="primary" size="small">
        Mark all as read
      </Button>
      <Button color="primary" size="small" style={{ marginLeft: 4 }}>
        Settings
      </Button>
    </Box>
  </Box>

  <CmtList
    data={data}
    renderRow={(item, index) => <RenderRow notification={item} key={index} onReadUnread={handleReadUnread} showExtraMedia={${showExtraMedia}} />}
    onEndReached={() => {}}` +
      getFooterCode() +
      `
  />
</Box>

const RenderRow = ({ notification, onReadUnread, showExtraMedia }) => {
  const classes = useStyles();
  const { name, avatar, content, time, media, status } = notification;

  return (
    <CmtNotificationItem
      className={clsx(classes.notificationRoot, { [classes.notificationRead]: status === 'read' })}
      content={
        <CmtMediaObject
          style={{
            alignItems: 'center',
          }}
          avatar={avatar}
          avatarPos="center"
          avatarProps={{
            style: { height: 48, width: 48, marginRight: 16, },
          }}
          title={
            <Typography component="h5" variant="body2">
              <Typography component="span" variant="body2">{content}</Typography>
              <Typography className="pointer" component="span" color="primary" variant="body2">
                {name}
              </Typography>
            </Typography>
          }
          subTitle={
            <Box display="flex" alignItems="center" mt={1}>
              <Typography component="span" variant='body2' color="textSecondary" className={classes.textSm}>
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
`
    );
  };

  return <SourceCodeComponent sourceCode={getSourceCode()} />;
};

export default DemoSourceCode;
