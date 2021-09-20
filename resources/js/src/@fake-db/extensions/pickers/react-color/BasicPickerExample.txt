import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import { Box } from '@material-ui/core';

const BasicPickerExample = () => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState({
    r: '241',
    g: '112',
    b: '19',
    a: '1',
  });

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = color => {
    setColor(color.rgb);
  };

  const background = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
  return (
    <Box>
      <Box display="inline-block" p={1} borderRadius="borderRadius" border={1} borderColor="grey.400" onClick={handleClick}>
        <Box height={25} width={40} style={{ backgroundColor: background }} />
      </Box>
      {displayColorPicker ? (
        <div className="cp-popover">
          <div className="cp-cover" onClick={handleClose} />
          <SketchPicker color={color} onChange={handleChange} />
        </div>
      ) : null}
    </Box>
  );
};

export default BasicPickerExample;
