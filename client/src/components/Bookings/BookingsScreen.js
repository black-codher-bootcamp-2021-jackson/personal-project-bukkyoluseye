import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../InputField';
import Tab from '../Tabs/Tab';
import BookingsSidePanel from './BookingsSidePanel';
import BookingRow from './BookingRow';
import CalendarView from './CalendarView';
import jwt_decode from 'jwt-decode';

// This is for the tab filtering
const tabMap = {
    Upcoming: (booking) => !booking.cancelled && !booking.completed,
    Completed: (booking) => booking.completed,
    Cancelled: (booking) => booking.cancelled,
};

const tabNames = Object.keys(tabMap);

const BookingsScreen = (props) => {
    const [show, setShow] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState([]);
    const navigate = useNavigate();

    // function treatAsUTC(date) {
    //     var result = new Date(date);
    //     result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
    //     return result;
    // }

    // function daysBetween(startDate, endDate) {
    //     let result1 = new Date(date);
    //     const firstDate = result1.setMinutes(
    //         result1.getMinutes() - result1.getTimezoneOffset()
    //     );
    //     return result1;
    //     var millisecondsPerDay = 24 * 60 * 60 * 1000;
    //     return (
    //         (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay
    //     );
    // }

    // const getMonth = { month: 'long' };
    // let currentMonth = date.toLocaleDateString('en-GB', getMonth); // Note to self: Change en-GB to undefined if you want the date to vary according to local timezone and default locale
    // let tomorrow = date.setDate(date.getDate() + 1);

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

    // async function search(value) {
    //     const results = axios.get()
    //     if (!results.error) {
    //         setItems(
    //             results.results.filter(
    //                 (result) =>
    //                     result.trackName &&
    //                     basket.findIndex(
    //                         (item) => result.id === item.trackId
    //                     ) === -1
    //             )
    //         );
    //     }
    // }

    const [filter, setFilter] = useState(tabNames[0]);

    const tabs = tabNames.map((label) => (
        <Tab
            key={label}
            label={label}
            isPressed={label === filter}
            setFilter={setFilter}
        />
    ));

    const cancelLesson = async () => {
        const response = await axios.patch('/api/bookings/:id/cancelled')
    };

    const bookingsList = props.bookings
        .filter(tabMap[filter])
        .map((booking, index) => {
            return (
                <BookingRow
                    booking={booking}
                    key={index}
                    onClick={() => getSelectedBooking(booking._id)}
                />
            );
        });

    return (
        <>
            <div className="page-title">
                <h1>Bookings</h1>
                <InputField variant="search" placeholder="Search by student" />
            </div>
            <ul className="tabs-nav">{tabs}</ul>
            <div id="bookings-screen">
                <div id="bookings-content">
                    {bookingsList}
                    {console.log(selectedBooking)}
                    {console.log(show)}
                    {selectedBooking && selectedBooking.length !==0 ? (
                        <BookingsSidePanel
                            booking={selectedBooking}
                            show={show}
                            onClose={onClose}
                            tab={filter}
                        />
                    ) : null}
                </div>
                <CalendarView />
            </div>
        </>
    );
};

export default BookingsScreen;
