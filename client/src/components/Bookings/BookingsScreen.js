import React, { useState, useEffect } from 'react'
import Tabs from '../Tabs/Tabs'
import StudentAvatar from './StudentAvatar'
import SubjectDetails from './SubjectDetails'
import BookingsSidePanel from './BookingsSidePanel'
import InputField from '../InputField'
import SignUp from '../Signup/SignUp'
import LogIn from '../Signup/Login'

const BookingsScreen = () => {
    const [date, setDate] = useState(new Date())
    const DateTime = () => {
        // new Date doesn't update if I set it directly to a variable so using useState to keep it updated

        useEffect(() => {
            let timer = setInterval(() => setDate(new date()), 1000)

            // A UseEffect cleanup function helos clean effects to prevent unwanted behaviours and optimizes application performance
            return function cleanup() {
                clearInterval(timer)
            }
        })
    }
    const getMonth = { month: 'long' }
    let currentMonth = date.toLocaleDateString('en-GB', getMonth) // Note to self: Change en-GB to undefined if you want the date to vary according to local timezone and default locale
    let tomorrow = date.setDate(date.getDate() + 1)
    return (
        <div id="bookings-screen">
            <div id="bookings-content">
                <Tabs labels={['Upcoming', 'Completed', 'Cancelled']} />
                <h2>{currentMonth}</h2>
                <h1>Hi there my name is Bukky</h1>
                {/* {/* {props.screen==="bookings"? */}

            </div>
            <BookingsSidePanel />
        </div>
    )
}

export default BookingsScreen
