import React from 'react';
import StudentAvatar from '../Bookings/StudentAvatar';

const MessagesRow = (props) => {
    return (
        <div onClick={console.log('clicked')}>
            {/* <StudentAvatar /> */}
            <div className="message-content">
                <p>{`{props.booking.studentId.name.first} {props.booking.studentId.name.last[0]}.`}</p>
                <p>{'props.message.content'}</p>
            </div>
        </div>
    );
};

export default MessagesRow;
