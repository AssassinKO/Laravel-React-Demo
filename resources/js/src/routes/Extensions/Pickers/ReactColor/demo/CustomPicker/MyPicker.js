import React from 'react';

import { CustomPicker } from 'react-color';
import { EditableInput, Hue } from 'react-color/lib/components/common';
import { Box } from '@material-ui/core';

export const MyPicker = ({ hex, hsl, onChange }) => {
  const styles = {
    hue: {
      height: 10,
      position: 'relative',
      marginBottom: 10,
    },
    input: {
      height: 38,
      border: `1px solid ${hex}`,
      paddingLeft: 10,
    },
    swatch: {
      width: 54,
      height: 38,
      background: hex,
    },
  };
  return (
    <Box>
      <Box style={styles.hue}>
        <Hue hsl={hsl} onChange={onChange} />
      </Box>

      <Box style={{ display: 'flex' }}>
        <EditableInput style={{ input: styles.input }} value={hex} onChange={onChange} />
        <Box style={styles.swatch} />
      </Box>
    </Box>
  );
};

export default CustomPicker(MyPicker);
