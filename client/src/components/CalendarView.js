import React, { useState } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import BookingRow from './Bookings/BookingRow';

const CalendarView = () => {
    const [date, setDate] = useState(new Date());
    const [bookingsList, setBookingsList] = useState(null);

    const onChange = async (date, e) => {
        e.preventDefault();
        setDate(date);
        const response = await axios.post(`/api/bookings/${date}`, {
            date: date,
        });

        if (response.data.booking) {
            setBookingsList(
                response.data.booking.map((booking, index) => {
                    return <BookingRow booking={booking} key={index} />;
                })
            );
        }
    };

    // import Bookings List and then if date.getDate() === bookings.date.getDate() (potential issue because date will be midnight of the day which isn't strictly equivalent) filter bookings list by date bookingslist.filter(booking => booking.date === date)
    // I want to add dots to the dates that have bookings
    // I want to create tabs in this view so users can see a todo list and a calendar view - can introduce a carousel here
    return (
        <>
            <div>
                <Calendar onChange={onChange} value={date} />
                <p>{date.toLocaleDateString()}</p>
            </div>
            {bookingsList.length > 0 ? bookingsList : 'No Bookings to show'}
        </>
    );
};

export default CalendarView;
