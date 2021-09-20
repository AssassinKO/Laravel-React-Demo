import React from 'react';
import PageContainer from '../../../../@jumbo/components/PageComponents/layouts/PageContainer';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { calendarData } from '../../../../@fake-db';

const { events } = calendarData;
const today = new Date();
const currentYear = today.getFullYear();

const localizer = momentLocalizer(moment);

const PopupCalendar = () => {
  return (
    <PageContainer>
      <p className="mb-4">
        Click the "+x more" link on any calendar day that cannot fit all the days events to see an inline popup of all the
        events.
      </p>
      <Calendar localizer={localizer} events={events} defaultDate={new Date(currentYear, 3, 1)} popup />
    </PageContainer>
  );
};

export default PopupCalendar;
