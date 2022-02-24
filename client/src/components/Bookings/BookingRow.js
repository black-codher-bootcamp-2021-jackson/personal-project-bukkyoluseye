import React from 'react';
import CloseCircle from '../../assets/SVGR/CloseCircle';
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
        <div
            className={
                props.className
                    ? `${props.className} booking-row`
                    : 'booking-row'
            }
        >
            {props.line ? <hr className="vertical-line"></hr> : null}
            <StudentAvatar student={props.booking.studentId} />
            <div
                className="booking-row-info"
                onClick={!props.booking.cancelled ? props.onClick : null}
                role="button"
            >
                <div className="booking-2-items name-subject">
                    <p className="booking-student-name">{`${props.booking.studentId.name.first} ${props.booking.studentId.name.last[0]}.`}</p>
                    <p className="subject">{`${props.booking.subject} ${props.booking.level}`}</p>
                </div>
                <div className="booking-date">
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
                <div className="booking-2-items lesson-freq">
                    <p>
                        {props.booking.type !== 'Free Meeting'
                            ? `${props.booking.type} Lesson`
                            : props.booking.type}
                    </p>
                    <p className="booking-frequency">
                        {props.booking.frequency && props.slot
                            ? `${props.booking.frequency} Slot`
                            : props.booking.frequency
                            ? props.booking.frequency
                            : null}
                    </p>
                </div>
                <div className="status">
                    <p className={`${props.booking.status.toLowerCase()} tag`}>
                        {props.booking.status}
                    </p>
                </div>
            </div>
            {!props.booking.cancelled ? (
                <div
                    className="cancel-x"
                    onClick={props.cancelOnClick}
                    role="button"
                >
                    <CloseCircle />
                </div>
            ) : null}
        </div>
    );
};

export default BookingRow;
