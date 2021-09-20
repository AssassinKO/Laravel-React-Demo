import React from 'react';
import CmtList from '../../../../../@coremat/CmtList';
import PostItem from './PostItem';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';

const PostsList = () => {
  const { feedPosts } = useSelector(({ wallApp }) => wallApp);
  return (
    <CmtList
      data={feedPosts}
      renderRow={(item, index) => (
        <Box mb={6} key={index}>
          <PostItem item={item} />
        </Box>
      )}
    />
  );
};

export default PostsList;
