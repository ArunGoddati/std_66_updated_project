import React, { useState } from 'react';
import './Calendar.css';

const Calendar = () => {
  const [viewAll, setViewAll] = useState(false);
  const today = new Date();


  const getStartOfWeek = (date) => {
    const day = date.getDay(); 
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  };

  const startOfWeek = getStartOfWeek(new Date());
  const daysInWeek = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(startOfWeek);
    d.setDate(startOfWeek.getDate() + i);
    return d;
  });


  const daysInMonth = (() => {
    const start = new Date(today.getFullYear(), today.getMonth(), 1);
    const end = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const days = [];
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      days.push(new Date(d));
    }
    return days;
  })();

  const formatDay = (date) =>
    date.toLocaleDateString('en-US', { weekday: 'short' });

  const formatDate = (date) => date.getDate();

  const displayDays = viewAll ? daysInMonth : daysInWeek;

  return (
    <div className="calendar-container p-3 bg-white rounded shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">Calendar</h5>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => setViewAll(!viewAll)}
        >
          {viewAll ? 'View Week' : 'View All'}
        </button>
      </div>

      <div
        className={`calendar-grid ${
          viewAll ? 'month-view' : 'week-view'
        }`}
      >
        {displayDays.map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${
              day.toDateString() === today.toDateString()
                ? 'today'
                : ''
            }`}
          >
            <div className="day-name">{formatDay(day)}</div>
            <div className="day-number">{formatDate(day)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
