import React from 'react';
import Box from '@material-ui/core/Box';
import CmtList from '../../../../@coremat/CmtList';

const CardActivities = ({ activities }) => {
  return (
    <Box my={4}>
      <CmtList
        data={activities}
        renderRow={(item, index) => (
          <Box key={index} mb={3} display="flex" alignItems="center">
            <Box fontWeight="bold">{item.user.name}</Box>
            <Box ml={1}>{item.content}</Box>
          </Box>
        )}
      />
    </Box>
  );
};

export default CardActivities;
