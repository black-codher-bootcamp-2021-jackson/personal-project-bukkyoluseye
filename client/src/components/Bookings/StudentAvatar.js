import React from 'react';

const StudentAvatar = () => {
    let student = {
        name: {
            first: "Timi",
            last: "Olu"
        }
    }
    return (
        <button className='student-avatar'>{`${student.name.first[0]}${student.name.last[0]}`}</button>
    )
}

export default StudentAvatar