import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import InputField from '../InputField';
import Tab from '../Tabs/Tab';
import BookingsSidePanel from './BookingsSidePanel';
import BookingRow from './BookingRow';
import CalendarView from '../CalendarView';

const tabMap = {
    Upcoming: (booking) => !booking.cancelled && !booking.completed,
    Completed: (booking) => booking.completed,
    Cancelled: (booking) => booking.cancelled,
};

const tabNames = Object.keys(tabMap);

const BookingsScreen = (props) => {
    const [show, setShow] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState([]);

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

    const [date, setDate] = useState(new Date());
    const DateTime = () => {
        // new Date doesn't update if I set it directly to a variable so using useEffect to keep it updated

        useEffect(() => {
            let timer = setInterval(() => setDate(new date()), 1000);

            // A UseEffect cleanup function helps clean effects to prevent unwanted behaviours and optimizes application performance
            return function cleanup() {
                clearInterval(timer);
            };
        });
    };
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
            {/* <BookingsTabs bookings={props.bookings} /> */}
            <ul className="tabs-nav">{tabs}</ul>
            {/* <Tabs labels={['Upcoming', 'Completed', 'Cancelled']} /> */}
            <div id="bookings-screen">
                <div id="bookings-content">
                    {bookingsList}

                    {/* bookings. */}
                    {/* {props.bookings.map((booking, index) => {
                        return (
                            <BookingRow
                                booking={booking}
                                key={index}
                                onClick={() => getSelectedBooking(booking._id)}
                            />
                        );
                    })} */}
                    {selectedBooking.length !== 0 ? (
                        <BookingsSidePanel
                            bookings={selectedBooking}
                            show={show}
                            onClose={onClose}
                            tab={filter}
                        />
                    ) : null}

                    {/* {/* {props.screen==="bookings"? */}
                </div>
                <CalendarView />
            </div>
        </>
    );
};

export default BookingsScreen;
