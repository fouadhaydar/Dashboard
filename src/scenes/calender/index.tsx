import { Box } from "@mui/material";
import { Header } from "../../components/Header";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { DateSelectArg, EventClickArg } from "@fullcalendar/core/index.js";

export interface CalenderEvent {
  id: string;
  title: string;
  start: string;
  end: string;
}

const Calendar = () => {
  // const [selectedDate, setSelectedDate] = useState<Date>(new Date("2023-10-13"))
  const [currentEvents, setCurrentEvents] = useState<CalenderEvent[]>([]);
  // const [open, setOpen] = useState(false);

  // const handleOpen = useCallback(() => setOpen(true),[])
  // const handleClose = useCallback(() => setOpen(false),[]);

  // const handleAdd = useCallback((content: CalenderEvent) => {
  //     setCurrentEvents(prev => [...prev, content]);
  // },[])

  const handleDateClick = (selected: DateSelectArg) => {
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();
    // handleOpen()
    // setSelectedDate(selected.start)
  };

  const handleEventClick = (selected: EventClickArg) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
      setCurrentEvents((prev) =>
        prev.filter((ele) => ele.id != selected.event.id)
      );
    }
  };

  return (
    <Box>
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />
      <Box flex="1 1 100%">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          weekends={false}
          select={handleDateClick}
          eventClick={handleEventClick}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          headerToolbar={{
            left: "prev next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          dayMaxEventRows={true}
          initialView="dayGridMonth"
          eventDurationEditable={true}
          eventResizableFromStart={true}
          events={currentEvents}
        />
      </Box>
    </Box>
  );
};

export default Calendar;
