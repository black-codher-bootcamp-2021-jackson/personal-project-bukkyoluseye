import React from 'react';
import StudentAvatar from './StudentAvatar';

const BookingRow = (props) => {
    return (
        <div onClick={props.onClick} className="booking-row">
            <StudentAvatar student={props.booking.studentId} />
            <div className="booking-row-info">
                <div className="booking-2-items">
                    <p>{`${props.booking.studentId.name.first} ${props.booking.studentId.name.last[0]}.`}</p>
                    <p>{`${props.booking.subject} ${props.booking.level}`}</p>
                </div>
                <div>
                    <p></p>
                    <p></p>
                </div>
                <div className="booking-2-items">
                    <p>
                        {props.booking.type != 'Free Meeting'
                            ? `${props.booking.type} Lesson`
                            : props.booking.type}
                    </p>
                    <p>
                        {props.booking.frequency
                            ? `${props.booking.frequency} Slot`
                            : null}
                    </p>
                </div>
                <div>
                    <p className={`${props.booking.status.toLowerCase()} tag` }>
                        {props.booking.status}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BookingRow;
