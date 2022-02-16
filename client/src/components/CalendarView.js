import React, { useState } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import BookingRow from './Bookings/BookingRow';
import jwt_decode from 'jwt-decode';
import NoBookings from './Bookings/NoBookings';

const CalendarView = () => {
    const [date, setDate] = useState(new Date());
    const [bookingsList, setBookingsList] = useState(null);

    const onChange = async (date, e) => {
        e.preventDefault();
        setDate(date);
        console.log(date);
        const token = localStorage.getItem('token');
        if (token) {
            const user = jwt_decode(token);
            console.log(user.id);
            if (!user) {
                localStorage.removeItem('token');
            } else {
                const response = await axios.post(`/api/bookings/${date}`, {
                    date: date,
                    id: user.id,
                });
                console.log(response);

                if (response.data.booking) {
                    setBookingsList(
                        response.data.booking.map((booking, index) => {
                            return <BookingRow booking={booking} key={index} />;
                        })
                    );
                }
            }
        }
    };

    // import Bookings List and then if date.getDate() === bookings.date.getDate() (potential issue because date will be midnight of the day which isn't strictly equivalent) filter bookings list by date bookingslist.filter(booking => booking.date === date)
    // I want to add dots to the dates that have bookings
    // I want to create tabs in this view so users can see a todo list and a calendar view - can introduce a carousel here
    return (
        <div className="calendar-carousel">
            <div className="calendar">
                <Calendar onChange={onChange} value={date} />
                <p>{date.toLocaleDateString()}</p>
            </div>
            {bookingsList && bookingsList.length > 0 ? (
                bookingsList
            ) : (
                <NoBookings />
            )}
        </div>
    );
};

export default CalendarView;
