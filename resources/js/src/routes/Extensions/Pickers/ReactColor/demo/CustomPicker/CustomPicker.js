import React from 'react';

import MyPicker from './MyPicker';
import { Box } from '@material-ui/core';

export const CustomPicker = () => {
  const handleColorChange = ({ hex }) => console.log(hex);

  return (
    <Box>
      <MyPicker color="orange" onChangeComplete={handleColorChange} />
    </Box>
  );
};

export default CustomPicker;
