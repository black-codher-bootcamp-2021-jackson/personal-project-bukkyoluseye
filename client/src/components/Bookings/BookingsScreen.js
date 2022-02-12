import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import InputField from '../InputField';
import Tabs from '../Tabs/Tabs';
import BookingsSidePanel from './BookingsSidePanel';
import BookingsTabs from './BookingsTabs';
import BookingRow from './BookingRow';
// import { getAllBookings } from '../../services/tutorAppService';

const BookingsScreen = (props) => {
    const [show, setShow] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState([]);

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

        if (!response.error) {
            setSelectedBooking(response.data.booking);
            setShow(true);
        } else {
            console.log('error', response.error);
        }
    }

    const onClose = () => {
        setShow(false);
    };

    return (
        <>
            <div className="bookings-title">
                <h1>Bookings</h1>
                <InputField variant="search" />
            </div>
            <div id="bookings-screen">
                <div id="bookings-content">
                    {/* <BookingsTabs bookings={props.bookings} /> */}
                    <Tabs labels={['Upcoming', 'Completed', 'Cancelled']} />
                    <h2>{currentMonth}</h2>
                    {props.bookings.map((booking, index) => {
                        return (
                            <BookingRow
                                booking={booking}
                                key={index}
                                onClick={() => getSelectedBooking(booking._id)}
                            />
                        );
                    })}
                    {selectedBooking.length !== 0 ? (
                        <BookingsSidePanel
                            bookings={selectedBooking}
                            show={show}
                            onClose={onClose}
                        />
                    ) : null}

                    {/* {/* {props.screen==="bookings"? */}
                </div>
            </div>
        </>
    );
};

export default BookingsScreen;
