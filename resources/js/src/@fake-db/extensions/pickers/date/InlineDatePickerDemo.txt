import React, { useState } from 'react';
import { DatePicker, KeyboardDatePicker } from '@material-ui/pickers';
import { Grid } from '@material-ui/core';
import GridContainer from '../../../../../@jumbo/components/GridContainer';

function InlineDatePickerDemo() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <GridContainer>
      <Grid item md={4}>
        <DatePicker variant="inline" label="Basic example" value={selectedDate} onChange={handleDateChange} />
      </Grid>

      <Grid item md={4}>
        <DatePicker
          disableToolbar
          variant="inline"
          label="Only calendar"
          helperText="No year selection"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </Grid>

      <Grid item md={4}>
        <KeyboardDatePicker
          autoOk
          variant="inline"
          inputVariant="outlined"
          label="With keyboard"
          format="MM/dd/yyyy"
          value={selectedDate}
          InputAdornmentProps={{ position: 'start' }}
          onChange={date => handleDateChange(date)}
        />
      </Grid>
    </GridContainer>
  );
}

export default InlineDatePickerDemo;
