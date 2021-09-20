import React, { useState } from 'react';
import { DateTimePicker, KeyboardDateTimePicker } from '@material-ui/pickers';
import { Grid } from '@material-ui/core';
import GridContainer from '../../../../../@jumbo/components/GridContainer';

function InlineDateTimePickerDemo() {
  const [selectedDate, handleDateChange] = useState(new Date('2018-01-01T00:00:00.000Z'));

  return (
    <GridContainer>
      <Grid item md={6}>
        <DateTimePicker variant="inline" label="Basic example" value={selectedDate} onChange={handleDateChange} />
      </Grid>

      <Grid item md={6}>
        <KeyboardDateTimePicker
          variant="inline"
          ampm={false}
          label="With keyboard"
          value={selectedDate}
          onChange={handleDateChange}
          onError={console.log}
          disablePast
          format="yyyy/MM/dd HH:mm"
        />
      </Grid>
    </GridContainer>
  );
}

export default InlineDateTimePickerDemo;
