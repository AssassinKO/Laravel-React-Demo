import React from 'react';
import useStyles from './BaseItem.style';
import Box from '@material-ui/core/Box';
import BaseItem from './BaseItem';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import CmtList from '../../../../@coremat/CmtList';

const PhotosUploaded = ({ item }) => {
  const classes = useStyles();

  const getTitle = () => {
    return (
      <Box className={classes.titleRoot}>
        <Box component="span" color="primary.main">
          {item.metaData.user.name}
        </Box>
        <Box component="span" mx={1}>
          uploaded {item.metaData.count} new photos in
        </Box>
        <Box component="span" color="primary.main">
          {item.metaData.group}
        </Box>
      </Box>
    );
  };

  const getActionComponent = () => (
    <CmtList
      className={classes.groupImages}
      data={item.metaData.photos}
      renderRow={(photo, index) => (
        <CmtAvatar key={index} src={photo.photo_url} alt={photo.caption} size="small" variant="rounded" />
      )}
    />
  );

  return <BaseItem item={item} title={getTitle()} actionComponent={getActionComponent()} />;
};

export default PhotosUploaded;
