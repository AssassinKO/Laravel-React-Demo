import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import AppTextInput from '../../../../@jumbo/components/Common/formElements/AppTextInput';
import { idGenerator } from '../../../../@jumbo/utils/commonHelper';
import CmtList from '../../../../@coremat/CmtList';
import CmtMediaObject from '../../../../@coremat/CmtMediaObject';
import CmtAvatar from '../../../../@coremat/CmtAvatar';

const user = {
  id: 23322,
  name: 'Atul Midha',
  profilePic: '/images/avatar/avatar4.jpg',
};

const CommentsSection = ({ comments, onSubmitComment }) => {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      const newComment = {
        id: idGenerator(),
        comment,
        user,
      };
      onSubmitComment(newComment);
      setComment('');
    }
  };

  return (
    <Box width={1}>
      <Box mt={4}>
        <AppTextInput
          placeholder="Add Comment..."
          multiline
          rows={4}
          fullWidth
          value={comment}
          onChange={e => setComment(e.target.value)}
          variant="outlined"
        />
        <Box mt={3} textAlign="right">
          <Button variant="contained" color="primary" size="small" onClick={handleCommentSubmit}>
            Submit Comment
          </Button>
        </Box>
      </Box>
      {comments.length > 0 && (
        <Box mt={4}>
          <Box mb={3}>Comments</Box>
          <CmtList
            data={comments}
            renderRow={(item, index) => (
              <Box mb={3} key={index}>
                <CmtMediaObject
                  avatar={<CmtAvatar size={30} src={item.user.profilePic} alt={item.user.name} />}
                  avatarPos="center"
                  title={item.comment}
                />
              </Box>
            )}
          />
        </Box>
      )}
    </Box>
  );
};

export default CommentsSection;
