import React from 'react';
import Box from '@material-ui/core/Box';
import useStyles from '../index.style';
import clsx from 'clsx';
import CmtAvatar from '../../../../../@coremat/CmtAvatar';

const TypingMessage = ({ currentUser }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={clsx(classes.chatMsgItem, classes.receivedMsgItem, classes.receivedMsgType)}>
        <Box className={classes.chatAvatar}>
          <CmtAvatar size={24} src={currentUser.profile_pic} alt={currentUser.name} />
        </Box>
        <Box className={classes.chatMsgContent}>
          <Box component="p">
            {currentUser.name}
            <Box component="span" color="text.disabled">
              {' '}
              is typing...
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default TypingMessage;
