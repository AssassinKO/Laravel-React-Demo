import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import clsx from 'clsx';
import moment from 'moment';
import useStyles from '../index.style';
import CmtImage from '../../../../../@coremat/CmtImage';
import MediaViewer from '../../MediaViewer';
import TextToHtml from '../../../../../@jumbo/components/Common/TextToHtml';

const SentMessageCell = ({ conversation }) => {
  const [position, setPosition] = useState(-1);
  const handleClose = () => {
    setPosition(-1);
  };
  const classes = useStyles();
  return (
    <Box className={clsx(classes.chatMsgItem, classes.sentMsgItem)}>
      <Box className={classes.chatMsgContent}>
        <Box className={classes.chatBubble}>
          {conversation.messageType === 'text' ? (
            <TextToHtml content={conversation.message} />
          ) : (
            <Box className={classes.chatBubbleImg}>
              <Box className={classes.chatBubbleImgRow}>
                {conversation.media.map((data, index) => (
                  <Box key={index} className={classes.chatBubbleImgItem} onClick={() => setPosition(index)}>
                    <Box className={classes.chatBubbleImgItemInner}>
                      {data.metaData.type.startsWith('image') ? (
                        <CmtImage key={index} src={data.preview} alt={data.name} height={100} width={100} />
                      ) : (
                        <iframe key={index} src={data.preview} title={data.name} height={100} width={100} />
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </Box>
        <Box className={classes.chatTime}>{moment(conversation.sentAt).format('hh:mm:ss')}</Box>
      </Box>
      <MediaViewer position={position} medias={conversation.media} handleClose={handleClose} />
    </Box>
  );
};

export default SentMessageCell;
