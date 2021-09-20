import React from 'react';
import CmtObjectSummary from '../../../../@coremat/CmtObjectSummary';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import Box from '@material-ui/core/Box';
import LinkIcon from '@material-ui/icons/Link';

const ItemCell = ({ item }) => {
  return (
    <Box bgcolor={item.bgColor} p={2} display="flex" alignItems="center" my={2} style={{ borderRadius: '4px' }}>
      <CmtObjectSummary
        avatar={<CmtAvatar style={{ backgroundColor: item.color }}>{item.icon}</CmtAvatar>}
        title={item.content}
        titleProps={{ style: { color: item.color } }}
        showItemBadge={false}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        align={'horizontal'}
      />
      {item.showIcon && (
        <Box ml="auto">
          <LinkIcon />
        </Box>
      )}
    </Box>
  );
};

export default ItemCell;
