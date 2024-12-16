import React, { useState } from "react";
import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calendar.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function Calendar() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });

  // Add new event
  const handleAddEvent = () => {
    if (newEvent.title && newEvent.start && newEvent.end) {
      setEvents([...events, newEvent]);
      setNewEvent({ title: "", start: "", end: "" });
    }
  };

  return (
    <div className="calendar-page">
      <h2 className="calendar-header">Schedule Your Events</h2>
      <div className="event-inputs">
        <input
          type="text"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <input
          type="datetime-local"
          placeholder="Start Date"
          value={newEvent.start}
          onChange={(e) => setNewEvent({ ...newEvent, start: new Date(e.target.value) })}
        />
        <input
          type="datetime-local"
          placeholder="End Date"
          value={newEvent.end}
          onChange={(e) => setNewEvent({ ...newEvent, end: new Date(e.target.value) })}
        />
        <button onClick={handleAddEvent} className="add-event-btn">
          Add Event
        </button>
      </div>

      <div className="calendar-container">
        <BigCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          defaultView="month"
        />
      </div>
    </div>
  );
}

export default Calendar;
