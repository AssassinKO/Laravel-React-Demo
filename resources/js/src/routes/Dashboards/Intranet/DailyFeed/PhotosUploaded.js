import React from 'react';
import useStyles from './BaseItem.style';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BaseItem from './BaseItem';
import CmtAvatar from '../../../../@coremat/CmtAvatar';

const PhotosUploaded = ({ item }) => {
  const classes = useStyles();

  const getTitle = () => {
    return (
      <Typography component="div" variant="h5" className={classes.titleRoot}>
        <Box component="span" color="blue">
          {item.metaData.user.name}
        </Box>
        <Box component="span" ml={1}>
          uploaded {item.metaData.count} new photos in
        </Box>
        <Box component="span" color="blue" ml={1}>
          {item.metaData.group}
        </Box>
      </Typography>
    );
  };

  return (
    <BaseItem item={item} title={getTitle()} avatar={item.metaData.user.profile_pic} username={item.metaData.user.name}>
      {item.metaData.photos.map((photo, index) => (
        <Box key={index} mr={1}>
          <CmtAvatar src={photo.photo_url} alt={photo.caption} size="small" variant="rounded" />
        </Box>
      ))}
    </BaseItem>
  );
};

export default PhotosUploaded;
