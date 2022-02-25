import React from 'react';

const StudentAvatar = (props) => {
    return (
        <button
            className="student-avatar"
            
        >{`${props.student.name.first[0]}${props.student.name.last[0]}`}</button>
    );
}

export default StudentAvatar