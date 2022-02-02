import React from 'react'

const InputField = (props) => {
    // switch (variant)
    // case
    // default
    return (
        <div className={variant != error ? "input": "input error-btn" }>
            {/* {left-icon ? <InputIcon /> : null} */}
            <label>{props.label}</label>
            <input
                placeholder={props.placeholder? props.placeholder : null}
                required
                type={props.type}
            ></input>
            {/* {right-icon ? <InputIcon /> : null} */}
            {/* {message ? <MessageOptions /> : null} */}
            {/* {props.error ? <span>{props.error}</span> : null} Check data type based on schema */}
        </div>
    )
}

export default InputField
