import React, { useContext, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import CreatePost from './CreatePost';
import PostsList from './PostsList';
import { useDispatch } from 'react-redux';
import { getFeedPosts } from '../../../../redux/actions/WallApp';
import { getWallHeight } from '../../../../@jumbo/constants/AppConstants';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PerfectScrollbar from 'react-perfect-scrollbar';
import AppContext from '../../../../@jumbo/components/contextProvider/AppContextProvider/AppContext';

const useStyles = makeStyles(() => ({
  perfectScrollbarNewsFeed: {
    height: props => `calc(100vh - ${props.height}px)`,
  },
}));

const NewsFeed = width => {
  const { showFooter } = useContext(AppContext);
  const dispatch = useDispatch();
  const classes = useStyles({
    height: getWallHeight(width, showFooter),
  });

  useEffect(() => {
    dispatch(getFeedPosts());
  }, [dispatch]);

  return (
    <PerfectScrollbar className={classes.perfectScrollbarNewsFeed}>
      <Box mb={6}>
        <CreatePost />
      </Box>
      <PostsList />
    </PerfectScrollbar>
  );
};

export default NewsFeed;
