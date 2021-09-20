import React, { useState } from 'react';
import SnoozeIcon from '@material-ui/icons/Snooze';
import AlarmIcon from '@material-ui/icons/AddAlarm';
import { Grid, IconButton, InputAdornment } from '@material-ui/core';
import { DateTimePicker, KeyboardDateTimePicker } from '@material-ui/pickers';
import GridContainer from '../../../../../@jumbo/components/GridContainer';

function CustomDateTimePicker() {
  const [clearedDate, handleClearedDateChange] = useState(null);
  const [selectedDate, handleDateChange] = useState(new Date('2019-01-01T18:54'));

  return (
    <GridContainer>
      <Grid item md={4}>
        <DateTimePicker
          autoOk
          disableFuture
          hideTabs
          ampm={false}
          value={selectedDate}
          onChange={handleDateChange}
          allowKeyboardControl={false}
          minDate={new Date('2018-01-01')}
          helperText="Hardcoded helper text"
          leftArrowIcon={<AlarmIcon />}
          leftArrowButtonProps={{ 'aria-label': 'Prev month' }}
          rightArrowButtonProps={{ 'aria-label': 'Next month' }}
          rightArrowIcon={<SnoozeIcon />}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <AlarmIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item md={4}>
        <KeyboardDateTimePicker
          value={selectedDate}
          onChange={handleDateChange}
          label="Keyboard with error handler"
          onError={console.log}
          minDate={new Date('2018-01-01T00:00')}
          format="yyyy/MM/dd hh:mm a"
        />
      </Grid>
      <Grid item md={4}>
        <DateTimePicker clearable value={clearedDate} onChange={handleClearedDateChange} helperText="Clear Initial State" />
      </Grid>
    </GridContainer>
  );
}

export default CustomDateTimePicker;
