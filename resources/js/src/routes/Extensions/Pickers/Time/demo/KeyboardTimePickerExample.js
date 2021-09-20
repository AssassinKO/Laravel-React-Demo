import React, { useState } from 'react';
import { KeyboardTimePicker } from '@material-ui/pickers';
import { Grid } from '@material-ui/core';
import GridContainer from '../../../../../@jumbo/components/GridContainer';

function KeyboardTimePickerExample() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <GridContainer>
      <Grid item md={6}>
        <KeyboardTimePicker
          label="Masked timepicker"
          placeholder="08:00 AM"
          mask="__:__ _M"
          value={selectedDate}
          onChange={date => handleDateChange(date)}
        />
      </Grid>
      <Grid item md={6}>
        <KeyboardTimePicker
          label="Masked timepicker"
          placeholder="08:00 AM"
          mask="__:__ _M"
          value={selectedDate}
          onChange={date => handleDateChange(date)}
        />
      </Grid>
    </GridContainer>
  );
}

export default KeyboardTimePickerExample;
