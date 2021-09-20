import React, { useState } from 'react';
import { DateTimePicker } from '@material-ui/pickers';
import { Grid } from '@material-ui/core';
import GridContainer from '../../../../../@jumbo/components/GridContainer';

function BasicDateTimePicker() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <GridContainer>
      <Grid item md={4}>
        <DateTimePicker label="DateTimePicker" inputVariant="outlined" value={selectedDate} onChange={handleDateChange} />
      </Grid>

      <Grid item md={4}>
        <DateTimePicker
          autoOk
          ampm={false}
          disableFuture
          value={selectedDate}
          onChange={handleDateChange}
          label="24h clock"
        />
      </Grid>

      <Grid item md={4}>
        <DateTimePicker
          value={selectedDate}
          disablePast
          onChange={handleDateChange}
          label="With Today Button"
          showTodayButton
        />
      </Grid>
    </GridContainer>
  );
}

export default BasicDateTimePicker;
