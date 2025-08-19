import React, { Component } from 'react';
import './Calendar.css';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewAll: false,
      today: new Date()
    };
  }

  getStartOfWeek = (date) => {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  };

  getDaysInWeek = () => {
    const startOfWeek = this.getStartOfWeek(new Date());
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(startOfWeek);
      d.setDate(startOfWeek.getDate() + i);
      return d;
    });
  };

  getDaysInMonth = () => {
    const { today } = this.state;
    const start = new Date(today.getFullYear(), today.getMonth(), 1);
    const end = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const days = [];
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      days.push(new Date(d));
    }
    return days;
  };

  formatDay = (date) =>
    date.toLocaleDateString('en-US', { weekday: 'short' });

  formatDate = (date) => date.getDate();

  toggleView = () => {
    this.setState((prevState) => ({ viewAll: !prevState.viewAll }));
  };

  render() {
    const { viewAll, today } = this.state;
    const daysInWeek = this.getDaysInWeek();
    const daysInMonth = this.getDaysInMonth();

    const displayDays = viewAll ? daysInMonth : daysInWeek;

    return (
      <div className="calendar-container p-3 bg-white rounded shadow-sm">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">Calendar</h5>
          <button
            className="btn btn-primary btn-sm"
            onClick={this.toggleView}
          >
            {viewAll ? 'View Week' : 'View All'}
          </button>
        </div>

        <div
          className={`calendar-grid ${viewAll ? 'month-view' : 'week-view'}`}
        >
          {displayDays.map((day, index) => (
            <div
              key={index}
              className={`calendar-day ${
                day.toDateString() === today.toDateString() ? 'today' : ''
              }`}
            >
              <div className="day-name">{this.formatDay(day)}</div>
              <div className="day-number">{this.formatDate(day)}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Calendar;
