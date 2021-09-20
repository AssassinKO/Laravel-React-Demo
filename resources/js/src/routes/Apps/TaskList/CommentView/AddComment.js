import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import AppTextInput from '../../../../@jumbo/components/Common/formElements/AppTextInput';
import SendIcon from '@material-ui/icons/Send';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { sendMessage } from '../../../../redux/actions/TaskList';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  commentField: {
    backgroundColor: alpha(theme.palette.common.dark, 0.05),
    padding: '16px 24px 16px 16px',
    display: 'flex',
    alignItems: 'center',
  },
  textFieldArea: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    '& .MuiInputBase-input': {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      paddingRight: 40,
      borderRadius: 4,
    },
  },
  imgRoot: {
    marginRight: 16,
  },
  attachIconRoot: {
    position: 'absolute',
    top: '50%',
    right: 10,
    zIndex: 1,
    transform: 'translateY(-50%)',
    cursor: 'pointer',
  },
}));

const AddComment = ({ setShowingComments, showingComments }) => {
  const classes = useStyles();
  const { currentUser } = useSelector(({ taskList }) => taskList);
  const [commentText, setCommentText] = useState('');
  const dispatch = useDispatch();

  const onSendMessage = () => {
    setShowingComments(showingComments + 1);
    dispatch(sendMessage(commentText));
    setCommentText('');
  };

  return (
    <Box className={classes.commentField}>
      <CmtAvatar className={classes.imgRoot} src={currentUser.profilePic} size={40} alt={currentUser.name} />
      <Box className={classes.textFieldArea}>
        <AppTextInput value={commentText} variant="outlined" onChange={e => setCommentText(e.target.value)} />
        {commentText ? (
          <SendIcon className={classes.attachIconRoot} onClick={onSendMessage} />
        ) : (
          <AttachFileIcon className={classes.attachIconRoot} />
        )}
      </Box>
    </Box>
  );
};

export default AddComment;
