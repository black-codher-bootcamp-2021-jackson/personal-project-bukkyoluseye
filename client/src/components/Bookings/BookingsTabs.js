import React, { useState } from 'react';

const BookingsTab = (props) => {
    const booking = {
        name: 'Trudy',
        age: 90,
        cancelled: false,
        completed: true,
    };
    const [filter, setFilter] = useState(Object.keys(tabMap[0]));
    const tabMap = {
        Upcoming: (booking) => !booking.cancelled && booking.completed,
        Completed: (booking) => booking.completed,
        Cancelled: (booking) => booking.cancelled,
    };

    const tabNames = Object.keys(tabMap);
    const bookingsList = bookings
        .filter(tabMap[filter])
        .map('booking to booking element with props & key');

    const tabs = tabMap.map(
        'name to Tab button component with props including setFilter={setFilter} inside the component onClick = {() => props.setFilter(props.name)}'
    );
    return <></>;
};

export default BookingsTab;
