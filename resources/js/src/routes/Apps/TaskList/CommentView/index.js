import React from 'react';
import { Box } from '@material-ui/core';
import CmtList from '../../../../@coremat/CmtList';
import CommentCell from './CommentCell';

const CommentView = ({ currentTask, showingComments, setShowingComments }) => {
  const { comments } = currentTask;

  return (
    <Box>
      <Box px={6} pb={6} pt={2}>
        {comments.length - showingComments > 0 ? (
          <Box
            className="pointer"
            color="primary.main"
            component="span"
            fontSize={16}
            mb={4}
            display="inline-block"
            onClick={() => setShowingComments(comments.length)}>
            +{comments.length - showingComments} Earlier Comments
          </Box>
        ) : null}
        <CmtList
          data={comments.slice(comments.length - showingComments, comments.length)}
          renderRow={comment => <CommentCell key={comment.id} comment={comment} />}
        />
      </Box>
    </Box>
  );
};

export default CommentView;
