import React from 'react';
import PageContainer from '../../../../@jumbo/components/PageComponents/layouts/PageContainer';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { calendarData } from '../../../../@fake-db';

const { events } = calendarData;
const today = new Date();
const currentYear = today.getFullYear();

const localizer = momentLocalizer(moment);

const BasicCalendar = () => {
  return (
    <PageContainer>
      <Calendar localizer={localizer} events={events} step={60} defaultDate={new Date(currentYear, 3, 1)} />
    </PageContainer>
  );
};

export default BasicCalendar;
