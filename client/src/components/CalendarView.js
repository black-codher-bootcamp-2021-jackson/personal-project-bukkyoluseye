import React, { useState } from 'react';
import Calendar from 'react-calendar';

const CalendarView = () => {
    const [date, setDate] = useState(new Date());

    const onChange = date => setDate(date)

    // import Bookings List and then if date.getDate() === bookings.date.getDate() (potential issue because date will be midnight of the day which isn't strictly equivalent) filter bookings list by date bookingslist.filter(booking => booking.date === date)
    // I want to add dots to the dates that have bookings
    // I want to create tabs in this view so users can see a todo list and a calendar view - can introduce a carousel here
    return (
        <>
            <div>
                <Calendar onChange={onChange} value={date} />
                <p>{date.toLocaleDateString()}</p>
            </div>
        </>
    );
};

export default CalendarView;
