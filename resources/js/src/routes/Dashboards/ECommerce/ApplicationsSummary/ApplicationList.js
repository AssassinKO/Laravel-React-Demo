import React from 'react';
import Box from '@material-ui/core/Box';
import CmtImage from '../../../../@coremat/CmtImage';

const ApplicationList = ({ applicationsList }) => {
  return (
    <Box display="flex" alignItems="center">
      {applicationsList.map((item, index) => (
        <Box key={index} ml={{ xs: 4, md: 5 }}>
          <CmtImage src={item} />
        </Box>
      ))}
    </Box>
  );
};

export default ApplicationList;
