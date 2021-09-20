import React, { useState } from 'react';
import { TimePicker } from '@material-ui/pickers';
import { Box, Grid } from '@material-ui/core';
import GridContainer from '../../../../../@jumbo/components/GridContainer';

const StaticTimePicker = () => {
  const [date, changeDate] = useState(new Date());

  // prettier-ignore
  return (
    <GridContainer>
      <Grid item>
        <Box boxShadow={4}>
          <TimePicker
            autoOk
            variant="static"
            openTo="hours"
            value={date}
            onChange={changeDate}
          />
        </Box>
      </Grid>

      <Grid item>
        <Box boxShadow={4}>
          <TimePicker
            autoOk
            ampm={false}
            variant="static"
            orientation="landscape"
            openTo="minutes"
            value={date}
            onChange={changeDate}
          />
        </Box>
      </Grid>
    </GridContainer>
    );
};

export default StaticTimePicker;
