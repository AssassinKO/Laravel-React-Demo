import React from 'react';

import MyPicker from './MyPicker';
import { Box } from '@material-ui/core';

const CustomPointer = () => {
  const handleColorChange = ({ hex }) => console.log(hex);

  return (
    <Box>
      <MyPicker color="coral" onChangeComplete={handleColorChange} />
    </Box>
  );
};

export default CustomPointer;
