import { createRef, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import scrollGridPlugin from '@fullcalendar/scrollgrid';
import momentTimezonePlugin from '@fullcalendar/moment-timezone';

import './styles.css';
import { events, resources } from './data';
import { EventContent } from './components/EventContent';

export default function App() {
  const handleDateClick = (arg: any) => {
    // bind with an arrow function
    alert(arg.dateStr);
  };

  const handleEventClick = (arg: any) => {
    console.log(arg);
  };

  const calendarRef = createRef<FullCalendar>();

  useEffect(() => {
    if (calendarRef && calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();

      debugger;
      //window.dateOnClick = calendarApi.select;
    }
  }, [calendarRef]);

  return (
    <div className="App">
      <FullCalendar
        allDaySlot={false}
        businessHours={true}
        customButtons={{
          futureDay: {
            text: 'Future Date',
            click: () => {
              const calendarApi = calendarRef?.current?.getApi();

              let futureDate = new Date('2021-07-30');

              console.log(futureDate);

              calendarApi?.gotoDate(futureDate);
            },
          },
        }}
        dateClick={handleDateClick}
        editable={true}
        eventClick={handleEventClick}
        events={events}
        expandRows={true}
        headerToolbar={{
          start: 'title',
          center: 'futureDay',
          end: 'today prev,next',
        }}
        height="100%"
        initialView="resourceTimeGridDay"
        nowIndicator={true}
        plugins={[
          interactionPlugin,
          momentTimezonePlugin,
          scrollGridPlugin,
          resourceTimeGridPlugin,
        ]}
        ref={calendarRef}
        resources={resources}
        selectable={true}
        slotLabelInterval={{
          hour: 1,
        }}
        slotDuration={{
          minute: 30,
        }}
        slotEventOverlap={false}
        timeZone="America/Los_Angeles"
        timeZoneParam="America/Los_Angeles"
        dayMinWidth={240}
      />
    </div>
  );
}
