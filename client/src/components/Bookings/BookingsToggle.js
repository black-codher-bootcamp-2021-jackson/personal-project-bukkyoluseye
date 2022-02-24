import React, {useState} from 'react';
import Calendar from '../../assets/SVGR/Calendar';
import List from '../../assets/SVGR/List';

const BookingsToggle = (props) => {
    return (
        <div className="bookings-toggle">
            <button
                onClick={props.onCalendarClick}
                className={
                    props.calendarShow
                        ? 'calendar-toggle active-toggle'
                        : 'calendar-toggle'
                }
            >
                <Calendar />
            </button>
            <button
                onClick={props.onListClick}
                className={
                    props.listShow ? 'list-toggle active-toggle' : 'list-toggle'
                }
            >
                <List />
            </button>
        </div>
    );
};

export default BookingsToggle;
