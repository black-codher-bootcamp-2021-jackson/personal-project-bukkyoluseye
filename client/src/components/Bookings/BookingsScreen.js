import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Tabs from '../Tabs/Tabs';
import BookingsSidePanel from './BookingsSidePanel';
// import { getAllBookings } from '../../services/tutorAppService';

const BookingsScreen = (props) => {
    const [selectedBooking, setSelectedBooking] = useState([]);
    console.log('props.bookings', props.bookings); // Not show why first render is empty
    // const [bookings, setBookings] = useState(null);
    // useEffect(() => {
    //     async function getBookings() {
    //         if (!bookings) {
    //             const response = await getAllBookings();
    //             setBookings(response);
    //         }
    //     }

    //     getBookings();
    // }, [bookings]);

    const [date, setDate] = useState(new Date());
    const DateTime = () => {
        // new Date doesn't update if I set it directly to a variable so using useState to keep it updated

        useEffect(() => {
            let timer = setInterval(() => setDate(new date()), 1000);

            // A UseEffect cleanup function helos clean effects to prevent unwanted behaviours and optimizes application performance
            return function cleanup() {
                clearInterval(timer);
            };
        });
    };
    const getMonth = { month: 'long' };
    let currentMonth = date.toLocaleDateString('en-GB', getMonth); // Note to self: Change en-GB to undefined if you want the date to vary according to local timezone and default locale
    let tomorrow = date.setDate(date.getDate() + 1);

    async function getSelectedBooking(bookingId) {
        const response = await axios.get(`/api/bookings/${bookingId}`);
        console.log(response);
        console.log(response.data);
        console.log(typeof response.data.bookings);
        console.log('button1', bookingId);
        console.log(bookingId);

        if (!response.error && selectedBooking.length === 0) {
            console.log('before Set Selected Booking', response.data.bookings);
            setSelectedBooking(response.data.bookings);
            console.log('After Set Selected Booking', selectedBooking);
            // console.log('not an error', response.data);
        } else {
            console.log('error', response.error);
        }
    }

    return (
        <div id="bookings-screen">
            <div id="bookings-content">
                <h1>Bookings</h1>
                <Tabs labels={['Upcoming', 'Completed', 'Cancelled']} />
                <h2>{currentMonth}</h2>
                <h1>Hi there my name is Bukky</h1>
                {props.bookings.map((booking, index) => {
                    console.log(booking);
                    return (
                        <button
                            key={index}
                            className="error-btn"
                            onClick={() => getSelectedBooking(booking._id)}
                        >
                            <div>{booking.status}</div>
                            <p>booking id = {booking._id}</p>
                            <p>tutor id = {booking.tutorId}</p>
                            <p>student id = {booking.studentId}</p>
                            {/* <p>student id = {booking.studentId.name}</p> */}
                        </button>
                    );
                })}
                {selectedBooking.length !== 0 ? (
                    <BookingsSidePanel
                        bookings={selectedBooking}
                        setShow="true"
                    />
                ) : null}

                {/* {/* {props.screen==="bookings"? */}
            </div>
        </div>
    );
};

export default BookingsScreen;
