import React from 'react';

import { BlockPicker } from 'react-color';
import { Box, Button } from '@material-ui/core';

export const BasicPosition = () => {
  const handleColorChange = ({ hex }) => console.log(hex);

  return (
    <Box position="relative">
      <Button variant="contained" color="primary">
        Pick Color
      </Button>

      <Box mt={3}>
        <BlockPicker color="#333" onChangeComplete={handleColorChange} />
      </Box>
    </Box>
  );
};

export default BasicPosition;
