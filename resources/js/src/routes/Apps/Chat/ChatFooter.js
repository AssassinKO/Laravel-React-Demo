import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDropzone } from 'react-dropzone';

import { alpha } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AttachFileIcon from '@material-ui/icons/Attachment';

import { sendMediaMessage, sendTextMessage } from '../../../redux/actions/Chat';
import AppTextInput from '../../../@jumbo/components/Common/formElements/AppTextInput';

const useStyles = makeStyles(theme => ({
  chatFooterRoot: {
    borderTop: `1px solid ${theme.palette.borderColor.main}`,
    backgroundColor: alpha(theme.palette.common.dark, 0.04),
    padding: '14px 20px 15px',
    display: 'flex',
    alignItems: 'center',
    marginTop: 'auto',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 30,
      paddingRight: 30,
    },
  },
  textFieldRoot: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    '& .MuiOutlinedInput-multiline': {
      padding: '10px 16px',
    },
    '& .MuiInputBase-root': {
      backgroundColor: alpha(theme.palette.background.paper, 0.9),
    },
  },
  iconBtnRoot: {
    padding: 8,
  },
}));

const ChatFooter = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const classes = useStyles();

  const onSendMessage = () => {
    if (message) {
      dispatch(sendTextMessage(message));
      setMessage('');
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*,video/*',
    multiple: true,
    onDrop: acceptedFiles => {
      const files = acceptedFiles.map(file => {
        return {
          preview: URL.createObjectURL(file),
          name: file.name,
          ...file,
          metaData: { type: file.type, size: file.size },
        };
      });
      dispatch(sendMediaMessage(files));
    },
  });

  const handleKeyPress = event => {
    const message = event.target.value.trim();
    if (event.key === 'Enter' && !event.shiftKey && message) {
      dispatch(sendTextMessage(message));
      event.preventDefault();
      setMessage('');
    }
  };

  return (
    <div className={classes.chatFooterRoot}>
      <input {...getInputProps()} />
      <IconButton className={classes.iconBtnRoot} {...getRootProps()}>
        <AttachFileIcon />
      </IconButton>
      <AppTextInput
        id="chat-textarea"
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type message..."
        variant="outlined"
        multiline
        className={classes.textFieldRoot}
      />
      <IconButton className={classes.iconBtnRoot} onClick={onSendMessage}>
        <SendIcon />
      </IconButton>
    </div>
  );
};

export default ChatFooter;
