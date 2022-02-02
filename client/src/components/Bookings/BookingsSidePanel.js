import React from 'react';

const BookingsSidePanel = (props) => {
    return (
        <div id="side-panel">
            <span>Upcoming Lesson</span>
            <h2>{}</h2>
            <div>
                <button>{`${props.student.name.first[0]}${props.student.name.last[0]}`}</button>
                <h3>{`${props.student.name.first} ${props.student.name.last[0]}`}</h3>
                <p>
                    {props.student.pronouns
                        ? `${props.student.year} | ${props.student.pronouns}`
                        : props.student.year}
                </p>
            </div>
            <div>
                <h4>
                    {/*`${props number of lessons had} of ${props number of lessons booked}`*/}
                </h4>
                <div className="subject-dtls">
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
                    
                </div>
            </div>
            <p>{/*Data about plan for last lesson*/}</p>
            <div id="bookings-btn">
                <button>{`Message ${props.student.name.first}`}</button>
                <button className="cancel error-btn">Cancel Lesson</button>
            </div>
        </div>
    )
}

export default BookingsSidePanel;