import React, { useState } from 'react';
import { DatePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/styles';
import { Box, IconButton } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  dayWrapper: {
    position: 'relative',
  },
  day: {
    width: 36,
    height: 36,
    fontSize: theme.typography.caption.fontSize,
    margin: '0 2px',
    color: 'inherit',
  },
  customDayHighlight: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '2px',
    right: '2px',
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: '50%',
  },
  nonCurrentMonthDay: {
    color: theme.palette.text.disabled,
  },
  highlightNonCurrentMonthDay: {
    color: '#676767',
  },
  highlight: {
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  firstHighlight: {
    extend: 'highlight',
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  },
  endHighlight: {
    extend: 'highlight',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
  },
}));

const CustomizationDatePickers = () => {
  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState(new Date());

  const handleWeekChange = date => {
    handleDateChange(date);
  };

  const formatWeekSelectLabel = (date, invalidLabel) =>
    date && date.isValid()
      ? `Week of ${date
          .clone()
          .startOf('week')
          .format('MMM Do')}`
      : invalidLabel;

  const renderWrappedWeekDay = (date, selectedDate, dayInCurrentMonth) => {
    const startDate = selectedDate
      .clone()
      .day(0)
      .startOf('day');
    const endDate = selectedDate
      .clone()
      .day(6)
      .endOf('day');

    const dayIsBetween =
      date.isSame(startDate) || date.isSame(endDate) || (date.isAfter(startDate) && date.isBefore(endDate));

    const firstDay = date.isSame(startDate, 'day');
    const lastDay = date.isSame(endDate, 'day');

    const wrapperClassName = [
      dayIsBetween ? classes.highlight : null,
      firstDay ? classes.firstHighlight : null,
      lastDay ? classes.endHighlight : null,
    ].join(' ');

    const dayClassName = [
      classes.day,
      !dayInCurrentMonth && classes.nonCurrentMonthDay,
      !dayInCurrentMonth && dayIsBetween && classes.highlightNonCurrentMonthDay,
    ].join(' ');

    return (
      <Box className={wrapperClassName}>
        <IconButton className={dayClassName}>
          <span> {date.format('DD')} </span>
        </IconButton>
      </Box>
    );
  };
  return (
    <DatePicker
      label="Week picker"
      value={selectedDate}
      onChange={handleWeekChange}
      renderDay={renderWrappedWeekDay}
      labelFunc={formatWeekSelectLabel}
    />
  );
};

export default CustomizationDatePickers;
