import React from 'react';
import SubjectDetails from './SubjectDetails';
import StandardButton from '../Buttons/StandardButton';
import ErrorButton from '../Buttons/ErrorButton';
import StudentAvatar from './StudentAvatar';
import CloseButton from '../Buttons/CloseButton';

const BookingsSidePanel = (props) => {
    const options = {
        weekday: 'short',
        day: 'numeric',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
    };
    console.log(props.show);
    console.log(props.booking);
    console.log(props.booking.studentId);
    console.log(props.booking.studentId.name);
    // let currentMonth = date.toLocaleDateString('en-GB', options);

    // if (props.setShow !== show) {
    //     setShow(props.setShow);
    // }

    return (
        <>
            {props.show ? (
                <div className="modal-background">
                    <div className="bookings-side-panel">
                        <CloseButton onClick={props.onClose} />
                        <span>{`${props.tab} Lesson`}</span>
                        <h3 id="bookings-date">
                            {new Date(props.booking.date).toLocaleDateString(
                                'en-GB',
                                options
                            )}
                        </h3>
                        <div className="side-student-dtls">
                            <div className="student-summary">
                                <StudentAvatar
                                    student={props.booking.studentId}
                                />
                                <h4>{`${props.booking.studentId.name.first} ${props.booking.studentId.name.last[0]}.`}</h4>
                                <p>
                                    {props.booking.studentId.pronouns
                                        ? 'Year ' +
                                          props.booking.studentId.year +
                                          ' | ' +
                                          props.booking.studentId.pronouns
                                        : props.booking.studentId.year}
                                </p>
                            </div>
                            <div>
                                {/* <h4>
                                `${props number of lessons had} of ${props number of lessons booked}`
                            </h4> */}
                                <p>
                                    {props.booking.frequency
                                        ? `${props.booking.frequency} Slot`
                                        : null}
                                </p>
                            </div>
                            <SubjectDetails student={props.booking} />
                            <p>{/*Data about plan for last lesson*/}</p>
                            <div className="two-btns">
                                <StandardButton
                                    label={`Message ${props.booking.studentId.name.first}`}
                                />
                                <ErrorButton label="Cancel Lesson" />
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default BookingsSidePanel;
