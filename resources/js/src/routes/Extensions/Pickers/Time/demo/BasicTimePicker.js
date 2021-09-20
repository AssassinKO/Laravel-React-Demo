import React, { useState } from 'react';
import { TimePicker } from '@material-ui/pickers';
import { Grid } from '@material-ui/core';
import GridContainer from '../../../../../@jumbo/components/GridContainer';

function BasicTimePicker() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <GridContainer>
      <Grid item md={4}>
        <TimePicker autoOk label="12 hours" value={selectedDate} onChange={handleDateChange} />
      </Grid>

      <Grid item md={4}>
        <TimePicker clearable ampm={false} label="24 hours" value={selectedDate} onChange={handleDateChange} />
      </Grid>

      <Grid item md={4}>
        <TimePicker
          showTodayButton
          todayLabel="now"
          label="Step = 5"
          value={selectedDate}
          minutesStep={5}
          onChange={handleDateChange}
        />
      </Grid>
    </GridContainer>
  );
}

export default BasicTimePicker;
