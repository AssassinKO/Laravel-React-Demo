import React, { useEffect, useState } from 'react';

import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ShareIcon from '@material-ui/icons/Share';

import useStyles from './BaseItem.style';
import BaseItem from './BaseItem';

const SharedPost = ({ item, updateFeed }) => {
  const classes = useStyles();
  const [currentItem, setCurrentItem] = useState(item);
  const [isLiked, setIsLiked] = useState(false);
  const [isShared, setIsShared] = useState(false);

  useEffect(() => {
    updateFeed(currentItem);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentItem]);

  const toggleLikeStatus = () => {
    setIsLiked(!isLiked);
    setCurrentItem({
      ...currentItem,
      likes: isLiked ? currentItem.likes + 1 : currentItem.likes - 1,
    });
  };

  const toggleIsShared = () => {
    setIsShared(!isShared);
    setCurrentItem({
      ...currentItem,
      shares: isShared ? currentItem.shares + 1 : currentItem.shares - 1,
    });
  };

  const getTitle = () => {
    return (
      <div className={classes.titleRoot}>
        <Box component="span" color="primary.main">
          {item.metaData.user.name}
        </Box>
        <Box component="span" mx={1}>
          has shared a post saying
        </Box>
        <span>{`"${item.metaData.post.title}"`}</span>
      </div>
    );
  };

  const getActionComponent = () => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <IconButton color={isLiked ? 'primary' : 'default'} onClick={toggleLikeStatus}>
        <ThumbUpIcon />
      </IconButton>
      <div className="ml-1">
        <IconButton color={isShared ? 'primary' : 'default'} onClick={toggleIsShared}>
          <ShareIcon />
        </IconButton>
      </div>
    </div>
  );

  return <BaseItem item={item} title={getTitle()} actionComponent={getActionComponent()} />;
};

export default SharedPost;
