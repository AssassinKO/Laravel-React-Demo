import React from 'react';
import Box from '@material-ui/core/Box';
import { updatePostLikeStatus } from '../../../../../../redux/actions/WallApp';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/styles/makeStyles/makeStyles';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles(() => ({
  iconSm: {
    fontSize: '16px !important',
    marginRight: 6,
  },
}));

const PostStats = ({ item }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const toggleLikeStatus = () => {
    dispatch(updatePostLikeStatus(item.id, !item.liked));
  };

  const { likes, comments, shares, views } = item;
  return (
    <Box display="flex" alignItems="center" flexWrap="wrap" mb={{ xs: 4, sm: 6 }} color="text.disabled" fontSize={12}>
      <Box display="flex" alignItems="center" mr={5} mb={{ xs: 2, sm: 0 }} onClick={toggleLikeStatus} className="pointer">
        <ThumbUpAltIcon className={classes.iconSm} />
        <Box ml={1}>{likes > 0 && likes} Likes</Box>
      </Box>
      <Box display="flex" alignItems="center" mr={5} mb={{ xs: 2, sm: 0 }} className="pointer">
        <VisibilityIcon className={classes.iconSm} />
        <Box ml={1}>{views > 0 && views} views</Box>
      </Box>
      <Box display="flex" alignItems="center" mb={{ xs: 2, sm: 0 }} className="pointer">
        <CommentIcon className={classes.iconSm} />
        <Box ml={1}>{comments.length > 0 && comments.length} comments</Box>
      </Box>
      <Box display="flex" alignItems="center" mb={{ xs: 2, sm: 0 }} ml="auto" className="pointer">
        <ShareIcon className={classes.iconSm} />
        <Box ml={1}>{shares > 0 && shares} shares</Box>
      </Box>
    </Box>
  );
};

export default PostStats;

PostStats.prototype = {
  item: PropTypes.object.isRequired,
};
