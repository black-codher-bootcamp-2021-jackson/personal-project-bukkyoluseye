import React from 'react'

const ErrorButton = (props) => {
    return (
        <button className="error-btn" onClick={() => props.onClick}>
            {props.label}
        </button>
    )
}

export default ErrorButton
