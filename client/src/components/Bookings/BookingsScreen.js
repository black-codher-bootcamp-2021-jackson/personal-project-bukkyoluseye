import axios from 'axios';
import React, { useState } from 'react';
import InputField from '../InputField';
import Tab from '../Tabs/Tab';
import BookingsSidePanel from './BookingsSidePanel';
import BookingRow from './BookingRow';
import CalendarView from './CalendarView';
import ConfirmModal from '../ConfirmModal';
import BookingsToggle from './BookingsToggle';

// This is for the tab filtering
const tabMap = {
    Upcoming: (booking) => !booking.cancelled && !booking.completed,
    Completed: (booking) => booking.completed,
    Cancelled: (booking) => booking.cancelled,
};

const tabNames = Object.keys(tabMap);

const BookingsScreen = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    /* FETCH DATA ON A SPECIFIC BOOKING */
    const [selectedBooking, setSelectedBooking] = useState([]);
    const [show, setShow] = useState(false);
    const [cancelShow, setCancelShow] = useState(false);
    const [colourIndex, setColourIndex] = useState('');

    async function getSelectedBooking(bookingId, index) {
        const response = await axios.get(`/api/bookings/${bookingId}`);
        if (!response.error) {
            setSelectedBooking(response.data.booking);
            setShow(true);
            setColourIndex(index + 1);
        } else {
            console.log('error', response.error);
        }
    }

    async function getSelectedBookingCancel(bookingId) {
        const response = await axios.get(`/api/bookings/${bookingId}`);
        if (!response.error) {
            setSelectedBooking(response.data.booking);
            setCancelShow(true);
        } else {
            console.log('error', response.error);
        }
    }
    /* ------------- */

    /* CONTROL WHAT USERS SEE ON SCREENS OF DIFFERENT WIDTHS */
    const tabletSize = props.windowWidth < 867;

    /* ------------- */

    /* TABS TO FILTER THE BOOKING LIST */
    const [filter, setFilter] = useState(tabNames[0]);

    const tabs = tabNames.map((label) => (
        <Tab
            key={label}
            label={label}
            labelType="lessons"
            isPressed={label === filter}
            setFilter={setFilter}
        />
    ));
    /* ------------- */

    /* CANCEL LESSON JOURNEY */
    /* Exit the cancel lesson modal */

    const onCancelModalClose = () => {
        setCancelShow(false);
    };

    /* Cancel lesson button */
    const cancelLesson = async (id) => {
        await axios.patch(`/api/bookings/${id}/cancelled`);
        setCancelShow(false);
        window.location.reload();
    };

    /* ------------- */

    /* STUDENT INFO SIDE PANEL */
    /* Exit side panel */
    const onPanelClose = () => {
        setShow(false);
    };
    /* ------------- */

    const bookingsList = props.bookings
        .filter(tabMap[filter])
        .map((booking, index) => {
            return (
                <BookingRow
                    className={`${index + 1} ${filter}`}
                    booking={booking}
                    key={index}
                    slot={tabletSize ? false : true}
                    onClick={() => getSelectedBooking(booking._id, index)}
                    cancelOnClick={() => getSelectedBookingCancel(booking._id)}
                    windowWidth={props.windowWidth}
                />
            );
        })
        .filter((booking) =>
            booking.props.booking.studentId.name.first
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );

    console.log(bookingsList);
    const today = bookingsList.filter(
        (booking) =>
            new Date(booking.props.booking.date).setHours(0, 0, 0, 0) ===
            new Date().setHours(0, 0, 0, 0)
    );
    const checkWeek = (date) => {
        return Math.ceil(
            (new Date(date).getDay() +
                1 +
                Math.floor(
                    (new Date(date) - new Date(date.getFullYear(), 0, 1)) /
                        (24 * 60 * 60 * 1000)
                )) /
                7
        );
    };

    const thisWeek = bookingsList.filter(
        (booking) =>
            checkWeek(new Date(booking.props.booking.date)) ===
                checkWeek(new Date()) &&
            new Date(booking.props.booking.date).setHours(0, 0, 0, 0) !==
                new Date().setHours(0, 0, 0, 0) &&
            (new Date(booking.props.booking.date) > new Date())
    );

    const past = bookingsList.filter(
        (booking) =>
            new Date(booking.props.booking.date) < new Date()
    );

    const upcoming = bookingsList.filter(
        (booking) =>
            checkWeek(new Date(booking.props.booking.date)) !==
            checkWeek(new Date())
    );

    /* TOGGLE BETWEEN CALENDAR VIEW AND LIST VIEW FOR SCREENS WITH WIDTHS < 867PX */
    const [calendarShow, setCalendarShow] = useState(true);
    const [listShow, setListShow] = useState(false);
    const onCalendarClick = () => {
        setListShow(false);
        setCalendarShow(true);
    };

    const onListClick = () => {
        setCalendarShow(false);
        setListShow(true);
    };
    /* ------------- */
    return (
        <>
            <div className="bookings-page">
                <div className="page-title">
                    <h1>Bookings</h1>
                    {tabletSize ? (
                        <BookingsToggle
                            onCalendarClick={onCalendarClick}
                            onListClick={onListClick}
                            calendarShow={calendarShow}
                            listShow={listShow}
                        />
                    ) : null}
                    {!tabletSize ? (
                        <InputField
                            variant="search"
                            placeholder="Search by student"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    ) : null}
                    {selectedBooking && selectedBooking.length !== 0 ? (
                        <ConfirmModal
                            cancelShow={cancelShow}
                            onClose={onCancelModalClose}
                            cancelLesson={() =>
                                cancelLesson(selectedBooking._id)
                            }
                            booking={selectedBooking}
                        />
                    ) : null}
                </div>

                {!tabletSize || (tabletSize && listShow) ? (
                    <ul className="tabs-nav">{tabs}</ul>
                ) : null}
                <div id="bookings-screen">
                    {!tabletSize || (tabletSize && listShow) ? (
                        <main id="bookings-content">
                            {today.length > 0 ? (
                                <div className="booking-groups">
                                    <h5>Today</h5>
                                    {today}
                                </div>
                            ) : null}
                            {thisWeek.length > 0 ? (
                                <div className="booking-groups">
                                    <h5>Next 7 Days</h5>
                                    {thisWeek}
                                </div>
                            ) : null}
                            {past.length > 0 ? (
                                <div className="booking-groups">
                                    <h5>{`Past Lessons & Meetings`}</h5>
                                    {past}
                                </div>
                            ) : null}
                            {upcoming.length > 0 ? (
                                <div className="booking-groups">
                                    <h5>Upcoming</h5>
                                    {upcoming}
                                </div>
                            ) : null}
                        </main>
                    ) : null}
                    {console.log(colourIndex)}
                    {selectedBooking && selectedBooking.length !== 0 ? (
                        <BookingsSidePanel
                            booking={selectedBooking}
                            id={`${colourIndex}`}
                            show={show}
                            onClose={onPanelClose}
                            tab={filter}
                            cancelOnClick={() =>
                                getSelectedBookingCancel(selectedBooking._id)
                            }
                        />
                    ) : null}
                    {!tabletSize || (tabletSize && calendarShow) ? (
                        <CalendarView />
                    ) : null}
                </div>
            </div>
        </>
    );
};

export default BookingsScreen;
