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
                            {new Date(props.bookings.date).toLocaleDateString(
                                'en-GB',
                                options
                            )}
                        </h3>
                        <div className="side-student-dtls">
                            <div className="student-summary">
                                <StudentAvatar
                                    student={props.bookings.studentId}
                                />
                                <h4>{`${props.bookings.studentId.name.first} ${props.bookings.studentId.name.last[0]}.`}</h4>
                                <p>
                                    {props.bookings.studentId.pronouns
                                        ? 'Year ' +
                                          props.bookings.studentId.year +
                                          ' | ' +
                                          props.bookings.studentId.pronouns
                                        : props.bookings.studentId.year}
                                </p>
                            </div>
                            <div>
                                {/* <h4>
                                `${props number of lessons had} of ${props number of lessons booked}`
                            </h4> */}
                                <p>
                                    {props.bookings.frequency
                                        ? `${props.bookings.frequency} Slot`
                                        : null}
                                </p>
                            </div>
                            <SubjectDetails student={props.bookings} />
                            <p>{/*Data about plan for last lesson*/}</p>
                            <div className="two-btns">
                                <StandardButton
                                    label={`Message ${props.bookings.studentId.name.first}`}
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
