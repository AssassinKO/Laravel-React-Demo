import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FilePicker from '../FilePicker';
import Chip from '@material-ui/core/Chip';
import makeStyles from '@material-ui/core/styles/makeStyles';
import EmojiPicker from './EmojiPicker';
import PropTypes from 'prop-types';
import SendIcon from '@material-ui/icons/Send';
import AppTextInput from '../../../../@jumbo/components/Common/formElements/AppTextInput';

const useStyles = makeStyles(theme => ({
  replayMailRoot: {
    marginTop: 'auto',
    padding: '20px 36px',
    borderTop: `1px solid ${theme.palette.borderColor.main}`,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
  commentArea: {
    position: 'relative',
    display: 'flex',
  },
  textFieldRoot: {
    margin: 0,
    '& .MuiInput-root': {
      padding: 10,
      '&:before, &:after': {
        display: 'none',
      },
    },
  },
  btnRoot: {
    '& .MuiSvgIcon-root': {
      marginRight: 6,
    },
  },
  filePickerRoot: {
    '& .dropzone': {
      padding: 0,
      border: '0 none',
      backgroundColor: 'transparent',
    },
  },
  attachRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 8,
    '& .MuiChip-root': {
      marginBottom: 8,
      marginRight: 8,
    },
  },
}));

const ReplyMailForm = ({ onClickReplyMail }) => {
  const [message, setMessage] = useState('');
  const [attachments, setAttachments] = useState([]);

  const classes = useStyles();

  const onAddAttachments = files => {
    const newAttachments = files.map(item => {
      return {
        id: item.id,
        originalFile: item.file,
        file: {
          name: item.file.name,
          type: item.file.type,
          size: item.file.size,
          path: item.file.path,
        },
      };
    });
    setAttachments([...attachments, ...newAttachments]);
  };

  const onDeleteAttachments = fileId => {
    const updatedAttachments = attachments.filter(item => item.id !== fileId);
    setAttachments(updatedAttachments);
  };

  const onPickEmoji = emoji => {
    setMessage(message + emoji);
  };

  const onClickSend = () => {
    if (message || attachments.length > 0) {
      const mail = {
        attachments,
        message,
      };
      onClickReplyMail(mail);
      setAttachments([]);
      setMessage('');
    }
  };

  return (
    <Box className={classes.replayMailRoot}>
      <Box className={classes.commentArea}>
        <Box mr={{ md: 2 }} mt={-1}>
          <EmojiPicker classes={classes} onPickEmoji={onPickEmoji} />
        </Box>
        <Box width={1}>
          <AppTextInput
            className={classes.textFieldRoot}
            multiline
            rows={3}
            value={message}
            onChange={e => setMessage(e.target.value)}
            margin="normal"
            placeholder="Send a reply..."
          />

          {attachments.length > 0 && (
            <Box className={classes.attachRoot}>
              {attachments.map((item, index) => (
                <Chip key={index} label={item.file.name} onDelete={() => onDeleteAttachments(item.id)} />
              ))}
            </Box>
          )}
        </Box>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="flex-end">
        <Box mr={2} className={classes.filePickerRoot}>
          <FilePicker onAddAttachments={onAddAttachments} />
        </Box>
        <Button
          className={classes.btnRoot}
          variant="contained"
          color="primary"
          onClick={onClickSend}
          disabled={!message && attachments.length === 0}>
          <SendIcon /> Send
        </Button>
      </Box>
    </Box>
  );
};

export default ReplyMailForm;

ReplyMailForm.prototype = {
  onClickReplyMail: PropTypes.func,
};
