import React, { useEffect, useState } from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import Box from '@material-ui/core/Box';
import { getDateElements, getNewDate, isDatesSame, isToday } from '../../../../@jumbo/utils/dateHelper';
import IconButton from '@material-ui/core/IconButton';
import { intranet } from '../../../../@fake-db';
import CmtList from '../../../../@coremat/CmtList';
import EventItem from './EventItem';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Button from '@material-ui/core/Button';
import useStyles from './index.style';
import Typography from '@material-ui/core/Typography';

const CalendarEvents = () => {
  const { calendarEvents } = intranet;
  const [dateCounter, setDateCounter] = useState(0);
  const [date, setDate] = useState(getNewDate(dateCounter, 'DD MMM, YYYY, hh:mm a'));
  const classes = useStyles();

  useEffect(() => {
    setDate(getNewDate(dateCounter, 'DD MMM, YYYY, hh:mm a'));
  }, [dateCounter]);

  const getHeader = () => {
    const dateObj = getDateElements(date);
    return (
      <Box display="flex" flexDirection="column">
        <Box display="flex" color="common.white" alignItems="baseline">
          <Box component="span" mr={2} fontSize={{ xs: 26, md: 36, xl: 48 }} lineHeight={1} fontWeight="fontWeightBold">
            {dateObj.date.date}
          </Box>
          <Box component="span" fontSize={16}>
            {dateObj.time}
          </Box>
        </Box>
        <Box display="flex" mt={1} color="common.white">
          <Box mr={1}>{dateObj.day},</Box>
          <Box>{dateObj.date.month + ' ' + dateObj.date.year}</Box>
        </Box>
      </Box>
    );
  };

  const getEvents = () => {
    return calendarEvents.filter(item => isDatesSame(item.date, date));
  };

  const showDate = () => {
    return isToday(date) ? 'Today' : getDateElements(date).date.dateString;
  };

  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardHeader
        className={classes.cardHeader}
        title={getHeader()}
        backgroundColor={['rgba(255, 255, 255, 0.3)', 'rgba(0, 0, 0, 0.3)']}>
        <Box display="flex" alignItems="center" color="common.white" mt={-5}>
          <IconButton className={classes.iconBtn} size="small" onClick={() => setDateCounter(dateCounter - 1)}>
            <ChevronLeftIcon />
          </IconButton>
          <Box component="span" mx={2} onClick={() => setDateCounter(0)} className="pointer">
            Today
          </Box>
          <IconButton className={classes.iconBtn} size="small" onClick={() => setDateCounter(dateCounter + 1)}>
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </CmtCardHeader>
      <CmtCardContent>
        <Typography className={classes.eventTitle}>{showDate()}</Typography>
        <PerfectScrollbar className={classes.scrollbarRoot}>
          <CmtList data={getEvents()} renderRow={(item, index) => <EventItem item={item} key={index} />} />
        </PerfectScrollbar>
        <Box display="flex" alignItems="center" mt={1}>
          <Button color="primary" className={classes.btnRoot}>
            View All
          </Button>
        </Box>
      </CmtCardContent>
    </CmtCard>
  );
};

export default CalendarEvents;
