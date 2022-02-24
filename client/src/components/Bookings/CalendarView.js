import React, { useState } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import BookingRow from './BookingRow';
import jwt_decode from 'jwt-decode';
import NoBookings from './NoBookings';

const CalendarView = () => {
    const [date, setDate] = useState(new Date());
    const [bookingsList, setBookingsList] = useState(null);
    const options = { hour: '2-digit', minute: '2-digit' };
    
    const endTime = (bookingDate, length) => {
        return new Date(
            new Date(bookingDate).getTime() + length * 60000
        ).toLocaleTimeString('en-GB', options);
    };

    const onChange = async (date, e) => {
        e.preventDefault();
        setDate(date);
        const token = localStorage.getItem('token');
        if (token) {
            const user = jwt_decode(token);
            if (!user) {
                localStorage.removeItem('token');
            } else {
                const response = await axios.post(`/api/bookings/${date}`, {
                    date: date,
                    id: user.id,
                });

                if (response.data.booking) {
                    setBookingsList(
                        response.data.booking
                            .filter((booking) => !booking.cancelled)
                            .map((booking, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="booking-calendar"
                                    >
                                        <span className="start-date">
                                            {endTime(booking.date, 0)}
                                        </span>
                                        <span className="end-date">
                                            {booking.type === 'Free Meeting'
                                                ? endTime(booking.date, 15)
                                                : booking.type === 'Private'
                                                ? endTime(booking.date, 60)
                                                : booking.type === 'Schools'
                                                ? endTime(booking.date, 55)
                                                : null}
                                        </span>

                                        <BookingRow
                                            line
                                            className="calendar-booking-row"
                                            booking={booking}
                                        />
                                    </div>
                                );
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
            </div>
            <div className="calendar-booking-list">
                <h5 className="calendar-date">
                    {new Date().setHours(0, 0, 0, 0) ===
                    new Date(date).setHours(0, 0, 0, 0)
                        ? "Today (" + date.toLocaleDateString() +")" : date.toLocaleDateString()}
                </h5>
                {bookingsList && bookingsList.length > 0 ? (
                    bookingsList
                ) : (
                    <NoBookings />
                )}
            </div>
        </div>
    );
};

export default CalendarView;
