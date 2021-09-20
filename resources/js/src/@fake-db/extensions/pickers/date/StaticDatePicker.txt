import React, { useState } from 'react';
import { DatePicker } from '@material-ui/pickers';
import { Box, Grid } from '@material-ui/core';
import GridContainer from '../../../../../@jumbo/components/GridContainer';

const StaticDatePicker = () => {
  const [date, changeDate] = useState(new Date());

  // prettier-ignore
  return (
    <GridContainer>
      <Grid item>
        <Box boxShadow={4}>
          <DatePicker
            autoOk
            variant="static"
            openTo="year"
            value={date}
            onChange={changeDate}
          />
        </Box>
      </Grid>

      <Grid item>
        <Box boxShadow={4}>
          <DatePicker
            autoOk
            orientation="landscape"
            variant="static"
            openTo="date"
            value={date}
            onChange={changeDate}
          />
        </Box>
      </Grid>
    </GridContainer>
    );
};

export default StaticDatePicker;
