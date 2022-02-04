import React from 'react'
import SubjectDetails from './SubjectDetails'
import StandardButton from './StandardButton'
import ErrorButton from './ErrorButton'
import StudentAvatar from './StudentAvatar'

const BookingsSidePanel = (props) => {
    return (
        <div className="bookings-side-panel">
            <span>Upcoming Lesson</span>
            <h2 id="bookings-date">props.booking.date</h2>
            <div className="student-summary">
                <StudentAvatar />
                <h4>{`{props.student.name.first} {props.student.name.last[0]}`}</h4>
                <p>
                    {`props.student.pronouns
                        ? {props.student.year} | {props.student.pronouns}
                        : props.student.year`}
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
                <StandardButton label={`Message props.student.name.first`} />
                <ErrorButton label="Cancel Lesson" />
            </div>
        </div>
    )
}

export default BookingsSidePanel
