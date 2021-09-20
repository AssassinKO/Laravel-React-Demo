import React, { useState } from 'react';
import { DatePicker } from '@material-ui/pickers';
import { Grid } from '@material-ui/core';
import GridContainer from '../../../../../@jumbo/components/GridContainer';

function YearMonthPicker() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <GridContainer>
      <Grid item md={4}>
        <DatePicker views={['year']} label="Year only" value={selectedDate} onChange={handleDateChange} />
      </Grid>

      <Grid item md={4}>
        <DatePicker
          views={['year', 'month']}
          label="Year and Month"
          helperText="With min and max"
          minDate={new Date('2020-03-01')}
          maxDate={new Date('2020-06-01')}
          value={selectedDate}
          onChange={handleDateChange}
        />
      </Grid>

      <Grid item md={4}>
        <DatePicker
          variant="inline"
          openTo="year"
          views={['year', 'month']}
          label="Year and Month"
          helperText="Start from year selection"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </Grid>
    </GridContainer>
  );
}

export default YearMonthPicker;
