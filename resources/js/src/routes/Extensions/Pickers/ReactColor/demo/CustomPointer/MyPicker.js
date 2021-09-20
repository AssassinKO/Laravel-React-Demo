import React from 'react';

import { CustomPicker } from 'react-color';
import { Alpha } from 'react-color/lib/components/common';
import MyPointer from './MyPointer';
import { Box } from '@material-ui/core';

export const MyPicker = ({ rgb, hsl, onChange }) => {
  return (
    <Box height={40} width={1} position="relative">
      <Alpha rgb={rgb} hsl={hsl} onChange={onChange} pointer={MyPointer} />
    </Box>
  );
};

export default CustomPicker(MyPicker);
