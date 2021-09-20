import React from 'react';
import CmtMediaObject from '../../../../@coremat/CmtMediaObject';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import Box from '@material-ui/core/Box';
import useStyles from './BaseItem.style';

const BaseItem = ({ title, item, actionComponent }) => {
  const classes = useStyles();

  return (
    <Box className={classes.feedItemRoot}>
      <CmtMediaObject
        avatarPos="center"
        avatar={<CmtAvatar size={56} src={item.user.profile_pic} alt={item.user.name} />}
        title={title}
        subTitle={item.timeRange}
        subTitleProps={{
          className: classes.subTitleRoot,
          component: 'div',
          variant: 'inherit',
          gutterBottom: false,
        }}
        actionsComponent={actionComponent}
      />
    </Box>
  );
};

export default BaseItem;
