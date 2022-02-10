import React, { useState } from 'react';
import SubjectDetails from './SubjectDetails';
import StandardButton from '../Buttons/StandardButton';
import ErrorButton from '../Buttons/ErrorButton';
import StudentAvatar from './StudentAvatar';
import CloseButton from '../Buttons/CloseButton';

const BookingsSidePanel = (props) => {
    const [show, setShow] = useState(false);

    if (props.setShow !== show) {
        setShow(props.setShow);
    }

    const onClose = () => {
        setShow(false);
    };

    return (
        <>
            {show ? (
                <div className="modal-background">
                    <div className="bookings-side-panel">
                        <CloseButton onClick={onClose} />
                        <span>Upcoming Lesson</span>
                        <h2 id="bookings-date">
                            props.bookingId.studentId[0].date - this is
                            currently just a string
                        </h2>
                        <div className="student-summary">
                            <StudentAvatar />
                            <h4>{`${props.bookings.studentId.name.first} ${props.bookings.studentId.name.last[0]}.`}</h4>
                            <p>
                                {props.bookings.studentId.pronouns
                                    ? props.bookings.studentId.year +
                                      ' | ' +
                                      props.bookings.studentId.pronouns
                                    : props.bookings.studentId.year}
                            </p>
                        </div>
                        <div>
                            <h4>
                                {/*`${props number of lessons had} of ${props number of lessons booked}`*/}
                            </h4>
                            <SubjectDetails />
                            {/* <div className="subject-dtls">
                    <p className="subject-dtls-labels">Subject</p>
                    <p>{props.booking.subject}</p>
                    <p className="subject-dtls-labels">Tier</p>
                    <p>{props.student.}</p>
                    <p className="subject-dtls-labels">Current grade</p>
                    <p>{props.student.grade.current}</p>
                    <p className="subject-dtls-labels">Target grade</p>
                    <p>{props.student.grade.target}</p>
                    <p className="subject-dtls-labels">Exam board</p>
                    <p>{props.student.subject.examBoard}</p>
                    
                </div> */}
                        </div>
                        <p>{/*Data about plan for last lesson*/}</p>
                        <div className="two-btns">
                            <StandardButton
                                label={`Message props.student.name.first`}
                            />
                            <ErrorButton label="Cancel Lesson" />
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default BookingsSidePanel;
