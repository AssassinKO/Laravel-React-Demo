import React, { useState } from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { Grid } from '@material-ui/core';
import GridContainer from '../../../../../@jumbo/components/GridContainer';

function KeyboardDatePickerExample() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <GridContainer>
      <Grid item md={6}>
        <KeyboardDatePicker
          clearable
          value={selectedDate}
          placeholder="10/10/2020"
          onChange={date => handleDateChange(date)}
          minDate={new Date()}
          format="MM/dd/yyyy"
        />
      </Grid>
      <Grid item md={6}>
        <KeyboardDatePicker
          placeholder="2020/10/10"
          value={selectedDate}
          onChange={date => handleDateChange(date)}
          format="yyyy/MM/dd"
        />
      </Grid>
    </GridContainer>
  );
}

export default KeyboardDatePickerExample;
