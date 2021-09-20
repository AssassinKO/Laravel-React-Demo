import React, { useState } from 'react';
import { DatePicker } from '@material-ui/pickers';
import { Grid } from '@material-ui/core';
import GridContainer from '../../../../../@jumbo/components/GridContainer';

function BasicDatePicker() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <GridContainer>
      <Grid item md={4}>
        <DatePicker label="Basic example" value={selectedDate} onChange={handleDateChange} animateYearScrolling />
      </Grid>

      <Grid item md={4}>
        <DatePicker autoOk label="Clearable" clearable disableFuture value={selectedDate} onChange={handleDateChange} />
      </Grid>

      <Grid item md={4}>
        <DatePicker
          disableFuture
          openTo="year"
          format="dd/MM/yyyy"
          label="Date of birth"
          views={['year', 'month', 'date']}
          value={selectedDate}
          onChange={handleDateChange}
        />
      </Grid>
    </GridContainer>
  );
}

export default BasicDatePicker;
