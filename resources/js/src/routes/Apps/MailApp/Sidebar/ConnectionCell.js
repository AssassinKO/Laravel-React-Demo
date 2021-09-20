import React, { useState } from 'react';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import Box from '@material-ui/core/Box';
import CmtMediaObject from '../../../../@coremat/CmtMediaObject';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import SenderInfo from '../MailsList/SenderInfo';

const useStyles = makeStyles(theme => ({
  connectionCellItem: {
    position: 'relative',
    padding: '5px 20px',
    transition: 'all 0.3s ease',
    '& .Cmt-media-object': {
      alignItems: 'center',
    },
    '& .Cmt-media-image': {
      marginRight: 4,
    },
  },
  titleRoot: {
    fontSize: 14,
    letterSpacing: 0.1,
    transition: 'all 0.3s ease',
    opacity: 1,
    visibility: 'visible',
    whiteSpace: 'nowrap',
  },
  subTitleRoot: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 12,
    color: theme.palette.text.disabled,
    letterSpacing: 0.4,
  },
  dotStatus: {
    height: 10,
    width: 10,
    borderRadius: '50%',
    transition: 'all 0.3s ease',
  },
  subTitleText: {
    marginLeft: 5,
    transition: 'all 0.3s ease',
    opacity: 1,
    visibility: 'visible',
    whiteSpace: 'nowrap',
  },
}));

const ConnectionCell = ({ item, onClickSendMail }) => {
  const classes = useStyles();
  const [showSenderInfo, setShowSenderInfo] = useState(null);
  const isOnline = item.status === 1;

  const onShowSenderInfo = event => {
    setShowSenderInfo(event.currentTarget);
  };

  const onHideSenderInfo = () => {
    setShowSenderInfo(null);
  };

  return (
    <React.Fragment>
      <Box
        className={clsx(classes.connectionCellItem, 'connection-cell-item')}
        onMouseEnter={onShowSenderInfo}
        onMouseLeave={onHideSenderInfo}>
        <CmtMediaObject
          avatarPos="center"
          avatar={<CmtAvatar size={40} src={item.profile_pic} alt={item.name} />}
          title={item.name}
          titleProps={{
            variant: 'h4',
            component: 'div',
            className: clsx(classes.titleRoot, 'title-root'),
          }}
          subTitle={
            <Typography className={classes.subTitleRoot}>
              <Box
                component="span"
                className={clsx(classes.dotStatus, 'dot-status')}
                style={{
                  backgroundColor: isOnline ? 'green' : 'red',
                }}
              />
              <Box component="span" className={clsx(classes.subTitleText, 'sub-title-text')}>
                {isOnline ? 'Online' : 'Offline'}
              </Box>
            </Typography>
          }
          subTitleProps={{ style: { marginBottom: 16 } }}
        />

        <SenderInfo
          showSenderInfo={showSenderInfo}
          from={item}
          isConnected={true}
          onHideSenderInfo={onHideSenderInfo}
          onClickSendMail={onClickSendMail}
        />
      </Box>
    </React.Fragment>
  );
};

export default ConnectionCell;

ConnectionCell.prototype = {
  openDialog: PropTypes.object.isRequired,
};
