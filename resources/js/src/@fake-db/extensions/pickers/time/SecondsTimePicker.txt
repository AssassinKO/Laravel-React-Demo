import React, { useState } from 'react';
import { TimePicker } from '@material-ui/pickers';
import { Grid } from '@material-ui/core';
import GridContainer from '../../../../../@jumbo/components/GridContainer';

function SecondsTimePicker() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <GridContainer>
      <Grid item md={6}>
        <TimePicker
          ampm={false}
          openTo="hours"
          views={['hours', 'minutes', 'seconds']}
          format="HH:mm:ss"
          label="With seconds"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </Grid>

      <Grid item md={6}>
        <TimePicker
          ampm={false}
          openTo="minutes"
          views={['minutes', 'seconds']}
          format="mm:ss"
          label="Minutes and seconds"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </Grid>
    </GridContainer>
  );
}

export default SecondsTimePicker;
