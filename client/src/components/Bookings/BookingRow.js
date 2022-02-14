import React from 'react';
import StudentAvatar from './StudentAvatar';

const BookingRow = (props) => {
    const day = {
        weekday: 'short',
        day: 'numeric',
        month: 'long',

    };

    const time = {
        hour: '2-digit',
        minute: '2-digit',
    };

    return (
        <div onClick={props.onClick} className="booking-row">
            <StudentAvatar student={props.booking.studentId} />
            <div className="booking-row-info">
                <div className="booking-2-items">
                    <p>{`${props.booking.studentId.name.first} ${props.booking.studentId.name.last[0]}.`}</p>
                    <p>{`${props.booking.subject} ${props.booking.level}`}</p>
                </div>
                <div>
                    <p>
                        {new Date(props.booking.date).toLocaleDateString(
                            'en-GB',
                            day
                        )}
                    </p>
                    <p>
                        {new Date(props.booking.date).toLocaleTimeString(
                            'en-GB',
                            time
                        )}
                    </p>
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
                    <p className={`${props.booking.status.toLowerCase()} tag`}>
                        {props.booking.status}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BookingRow;
