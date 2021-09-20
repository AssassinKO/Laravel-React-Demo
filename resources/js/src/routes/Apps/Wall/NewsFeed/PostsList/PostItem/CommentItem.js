import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import UserInfo from './UserInfo';
import PropTypes from 'prop-types';

const CommentItem = ({ item, classes }) => {
  const [isLiked, setIsLiked] = useState(item.liked);
  return (
    <Box mb={6}>
      <UserInfo user={item.owner} date={item.date} classes={classes} />
      <Box ml={14}>
        <Box mt={2} component="p" color="text.secondary">
          {item.comment}
        </Box>
        <Box mt={3} display="flex" alignItems="center">
          <Button size="small" variant="contained" color="primary" onClick={() => setIsLiked(!isLiked)}>
            {isLiked ? 'Unlike' : 'Like'}
          </Button>
          <Box ml={2.5}>
            <Button size="small" variant="contained" color="secondary">
              Comment
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CommentItem;

CommentItem.prototype = {
  item: PropTypes.object.isRequired,
};
