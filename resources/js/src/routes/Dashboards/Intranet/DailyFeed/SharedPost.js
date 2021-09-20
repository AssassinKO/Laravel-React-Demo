import React, { useState } from 'react';
import useStyles from './BaseItem.style';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BaseItem from './BaseItem';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const SharedPost = ({ item, updateFeed }) => {
  const classes = useStyles();
  const [isLiked, setIsLiked] = useState(false);
  const [isShared, setIsShared] = useState(false);

  const toggleLikeStatus = () => {
    if (isLiked) {
      item.likes--;
    } else {
      item.likes++;
    }

    updateFeed(item);
    setIsLiked(!isLiked);
  };

  const toggleIsShared = () => {
    if (isShared) {
      item.shares--;
    } else {
      item.shares++;
    }

    updateFeed(item);
    setIsShared(!isShared);
  };

  const getTitle = () => {
    return (
      <Typography component="div" variant="h5" className={classes.titleRoot}>
        <Box component="span" color="blue">
          {item.metaData.user.name}
        </Box>
        <Box component="span" ml={1}>
          has shared a post saying
        </Box>
        <Box component="span" ml={1}>
          {`"${item.metaData.post.title}"`}
        </Box>
      </Typography>
    );
  };

  return (
    <BaseItem item={item} title={getTitle()} avatar={item.metaData.user.profile_pic} username={item.metaData.user.name}>
      <Box mr={2} my={1}>
        <Button
          className={clsx(classes.btnRoot, isLiked ? '' : 'btn-white')}
          size="small"
          variant="contained"
          color={isLiked ? 'primary' : 'default'}
          onClick={toggleLikeStatus}>
          <Box component="span" mr={2}>
            <FavoriteIcon className={classes.blockRoot} />
          </Box>
          {`${item.likes} ${isLiked ? 'Liked' : 'like'}`}
        </Button>
      </Box>

      <Box mr={2} my={1}>
        <Button
          className={clsx(classes.btnRoot, isShared ? '' : 'btn-white')}
          size="small"
          variant="contained"
          color={isShared ? 'secondary' : 'default'}
          onClick={toggleIsShared}>
          <Box component="span" mr={2}>
            <ShareIcon className={classes.blockRoot} />
          </Box>
          {item.shares} SHARES
        </Button>
      </Box>
    </BaseItem>
  );
};

export default SharedPost;
