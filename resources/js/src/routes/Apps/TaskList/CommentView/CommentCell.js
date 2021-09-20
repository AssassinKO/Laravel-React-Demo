import React from 'react';
import CmtMediaObject from '../../../../@coremat/CmtMediaObject';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CmtAvatar from '../../../../@coremat/CmtAvatar';

const useStyles = makeStyles(theme => ({
  commentCellItem: {
    marginBottom: 15,
    display: 'flex',
    alignItems: 'flex-start',
    '& .Cmt-media-image': {
      alignSelf: 'flex-start',
    },
  },
}));

const CommentCell = ({ comment }) => {
  const classes = useStyles();
  return (
    <CmtMediaObject
      className={classes.commentCellItem}
      avatarPos="center"
      avatar={<CmtAvatar src={comment.user.profilePic} size={40} alt={comment.user.name} />}
      title={comment.user.name}
      titleProps={{
        variant: 'h4',
        component: 'div',
      }}
      content={comment.message}
      contentProps={{
        component: 'p',
        style: {
          fontSize: 14,
          letterSpacing: 0.25,
        },
      }}
    />
  );
};

export default CommentCell;
