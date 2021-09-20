import React from 'react';
import PageContainer from '../../../../@jumbo/components/PageComponents/layouts/PageContainer';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { calendarData } from '../../../../@fake-db';

const { events } = calendarData;
const today = new Date();
const currentYear = today.getFullYear();

const localizer = momentLocalizer(moment);

const SelectableCalendar = () => {
  return (
    <PageContainer>
      <p className="mb-4">
        Click an event to see more info, or drag the mouse over the calendar to select a date/time range.
      </p>
      <Calendar
        localizer={localizer}
        events={events}
        selectable
        defaultView="week"
        scrollToTime={new Date(1970, 1, 1, 6)}
        defaultDate={new Date(currentYear, 3, 1)}
        onSelectEvent={event => alert(event.title)}
        onSelectSlot={slotInfo =>
          alert(
            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
              `\nend: ${slotInfo.end.toLocaleString()}` +
              `\naction: ${slotInfo.action}`,
          )
        }
      />
    </PageContainer>
  );
};

export default SelectableCalendar;
