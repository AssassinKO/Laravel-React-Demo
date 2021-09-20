import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import CmtAvatar from '../../../../../../@coremat/CmtAvatar';
import AppTextInput from '../../../../../../@jumbo/components/Common/formElements/AppTextInput';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../../../../../redux/actions/WallApp';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  addCommentRoot: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 -24px -24px',
    padding: '15px 24px',
    borderTop: `1px solid ${theme.palette.borderColor.main}`,
  },
  textInputRoot: {
    '& .MuiInputBase-root': {
      fontSize: 12,
    },
    '& .MuiInput-underline': {
      '&:before, &:after': {
        display: 'none',
      },
    },
  },
}));

const AddComment = ({ postId }) => {
  const dispatch = useDispatch();
  const { userDetail } = useSelector(({ wallApp }) => wallApp);
  const [comment, setComment] = useState('');
  const classes = useStyles();

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      const newComment = {
        owner: {
          name: userDetail.name,
          profile_pic: userDetail.profile_pic,
          id: userDetail.id,
        },
        comment,
      };
      dispatch(addComment(postId, newComment));
      setComment('');
    }
  };

  return (
    <Box className={classes.addCommentRoot}>
      <CmtAvatar size={24} src={userDetail.profile_pic} alt={userDetail.name} />
      <Box ml={4} flex={1}>
        <AppTextInput
          className={classes.textInputRoot}
          placeholder="Type comment"
          fullWidth
          value={comment}
          onChange={e => setComment(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </Box>
    </Box>
  );
};

export default AddComment;

AddComment.prototype = {
  postId: PropTypes.number.isRequired,
};
