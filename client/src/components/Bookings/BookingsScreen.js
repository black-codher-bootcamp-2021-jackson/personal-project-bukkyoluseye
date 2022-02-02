import React, { useState, useEffect } from 'react';

const BookingsScreen = () => {
    const dateTime = () => {
        // new Date doesn't update if I set it directly to a variable so using useState to keep it updated
        const [ date, setDate ] = useState(new Date());

        useEffect(() => {
            let timer = setInterval(()=>setDate(new date()), 1000)

            // A UseEffect cleanup function helos clean effects to prevent unwanted behaviours and optimizes application performance
            return function cleanup() {
                clearInterval(timer)
            }
        })
    };
    const getMonth = { month: 'long'};
    let currentMonth = date.toLocaleDateString('en-GB', getMonth); // Note to self: Change en-GB to undefined if you want the date to vary according to local timezone and default locale
    let tomorrow = today.setDate(today.getDate()+1)
    return (
        <>
            <h2>{currentMonth}</h2>
        </>
    )
}

export default BookingsScreen;