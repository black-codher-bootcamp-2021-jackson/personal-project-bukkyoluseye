import React from 'react';

const BookingsScreen = () => {
    const date = new Date();
    var options = { month: 'long'};
    return (
        <>
            <h2>{new Intl.DateTimeFormat('en-GB', options).format(date)}</h2>
        </>
    )
}

export default BookingsScreen;