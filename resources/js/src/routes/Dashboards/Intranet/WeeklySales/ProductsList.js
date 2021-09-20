import React from 'react';
import { Typography } from '@material-ui/core';
import CmtAvatarGroup from '../../../../@coremat/CmtAvatarGroup';
import CmtList from '../../../../@coremat/CmtList';
import Box from '@material-ui/core/Box';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import useStyles from './index.style';

const ProductsList = ({ selectedProducts }) => {
  const classes = useStyles();

  const moreItemsTooltip = data => (
    <Box p={1}>
      <CmtList
        data={data}
        renderRow={(item, index) => (
          <Box key={index} className={classes.listItem}>
            <CmtAvatar src={item.logo} size="small" />
            <Typography className={classes.listItemTitle} variant="h4" component="h4">
              {item.name}
            </Typography>
          </Box>
        )}
      />
    </Box>
  );

  return (
    <CmtAvatarGroup
      items={selectedProducts}
      srcKey="logo"
      spacing={0}
      max={5}
      titleKey="name"
      renderItemSummary={(item, index) => (
        <Typography key={index} color="inherit">
          {item.name}
        </Typography>
      )}
      renderMore={restItems => moreItemsTooltip(restItems)}
    />
  );
};

export default ProductsList;
