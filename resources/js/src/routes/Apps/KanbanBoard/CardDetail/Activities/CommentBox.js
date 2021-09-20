import React, { useState } from 'react';
import CmtAvatar from '../../../../../@coremat/CmtAvatar';
import useStyles from './index.style';
import { idGenerator } from '../../../../../@jumbo/utils/commonHelper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { ClickAwayListener, TextareaAutosize } from '@material-ui/core';
import clsx from 'clsx';

const CommentBox = ({ user, onSubmitComment }) => {
  const classes = useStyles();
  const [comment, setComment] = useState('');
  const [isFocused, setFocused] = useState(false);

  const onCommentBoxFocus = () => setFocused(true);
  const handleClickAway = () => setFocused(false);

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      const newComment = {
        id: idGenerator(),
        comment,
        user,
        type: 'comment',
        createdAt: new Date(),
      };

      onSubmitComment(newComment);
      setFocused(false);
      setComment('');
    }
  };

  return (
    <div className={classes.commentBoxRoot}>
      <div className={classes.avatarWrapper}>
        <CmtAvatar size={32} src={user.profilePic} alt={user.name} />
      </div>

      <ClickAwayListener onClickAway={handleClickAway}>
        <div
          className={clsx(classes.commentFrame, {
            [classes.isFocused]: isFocused || comment,
          })}>
          <div className={classes.commentBox}>
            <TextareaAutosize
              placeholder="Write a comment..."
              value={comment}
              onChange={e => setComment(e.target.value)}
              onFocus={onCommentBoxFocus}
            />

            <Box mt={3} textAlign="right" className={classes.commentControls}>
              <Button variant="contained" color="primary" size="small" disabled={!comment} onClick={handleCommentSubmit}>
                Save
              </Button>
            </Box>
          </div>
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default CommentBox;
