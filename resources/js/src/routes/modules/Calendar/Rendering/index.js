import React from 'react';
import PageContainer from '../../../../@jumbo/components/PageComponents/layouts/PageContainer';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { calendarData } from '../../../../@fake-db';

const { events } = calendarData;
const today = new Date();
const currentYear = today.getFullYear();

const localizer = momentLocalizer(moment);

function Event({ event }) {
  return (
    <span>
      <strong>{event.title}</strong>
      {event.desc && ':  ' + event.desc}
    </span>
  );
}

function EventAgenda({ event }) {
  return (
    <span>
      <em style={{ color: 'magenta' }}>{event.title}</em>
      <p>{event.desc}</p>
    </span>
  );
}

const RenderingCalendar = () => {
  return (
    <PageContainer>
      <Calendar
        localizer={localizer}
        events={events}
        defaultDate={new Date(currentYear, 3, 1)}
        defaultView="agenda"
        components={{
          event: Event,
          agenda: {
            event: EventAgenda,
          },
        }}
      />
    </PageContainer>
  );
};

export default RenderingCalendar;
