import React, { useState } from 'react';
import { KeyboardTimePicker, TimePicker } from '@material-ui/pickers';
import { Grid } from '@material-ui/core';
import GridContainer from '../../../../../@jumbo/components/GridContainer';

function InlineTimePickerDemo() {
  const [selectedDate, handleDateChange] = useState('2018-01-01T00:00:00.000Z');

  return (
    <GridContainer>
      <Grid item md={6}>
        <TimePicker variant="inline" label="Inline mode" value={selectedDate} onChange={handleDateChange} />
      </Grid>

      <Grid item md={6}>
        <KeyboardTimePicker
          ampm={false}
          variant="inline"
          label="With keyboard"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </Grid>
    </GridContainer>
  );
}

export default InlineTimePickerDemo;
