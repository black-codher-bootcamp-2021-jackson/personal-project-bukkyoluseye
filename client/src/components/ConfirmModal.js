import React from "react";

const ConfirmModal = (props) => {
    return (<>
        <p>You're about to cancel your lesson with {props.studentId.name.first} on {props.date}. This action cannot be reversed</p>
    </>)
}

export default ConfirmModal