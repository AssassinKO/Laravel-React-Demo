import React, { useState } from 'react';

import { CompactPicker } from 'react-color';
import { Box, Button } from '@material-ui/core';

const BasicToggle = () => {
  const [pickerVisible, setPickerVisible] = useState(true);

  const handleColorChange = ({ hex }) => console.log(hex);

  const onTogglePicker = () => {
    setPickerVisible(!pickerVisible);
  };

  return (
    <Box poition="relative">
      <Button variant="contained" color="primary" onClick={onTogglePicker}>
        Toggle Picker
      </Button>

      {pickerVisible && (
        <Box position="static" mt={3}>
          <CompactPicker color="#333" onChangeComplete={handleColorChange} />
        </Box>
      )}
    </Box>
  );
};

export default BasicToggle;
