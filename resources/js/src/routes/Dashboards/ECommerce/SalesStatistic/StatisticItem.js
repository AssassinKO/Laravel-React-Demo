import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const StatisticItem = ({ item }) => {
  return (
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <Box display="flex" alignItems="center" mb={2}>
        {item.icon}
        <Box component="span" ml={3} fontSize={18} fontWeight="fontWeightBold">
          {item.value}
        </Box>
      </Box>
      <Box component="p" fontSize={16} color="text.secondary">
        {item.title}
      </Box>
    </Grid>
  );
};
export default StatisticItem;
