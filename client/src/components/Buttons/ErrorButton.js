import React from 'react'

const ErrorButton = (props) => {
    return (
        <button
            className="error-btn"
            type={props.type ? props.type : null}
            onClick={props.onClick ? props.onClick : null}
        >
            {props.label}
        </button>
    );
}

export default ErrorButton
