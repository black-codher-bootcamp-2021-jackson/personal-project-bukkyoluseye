import React from 'react'
import CloseCircle from '../assets/SVGR/CloseCircle'
import BookingsIcon from '../assets/SVGR/BookingsIcon'
import RequestsIcon from '../assets/SVGR/RequestsIcon'



const InputField = (props) => {
    const ShowPassword = (prop) => {
        // Passes the correct SVG to NavBarIcon Component depending on screen name
        switch (props.type) {
            case 'password':
                return <BookingsIcon />
            case 'text':
                return <RequestsIcon />
            default:
                return <p>Error</p>
        }
    }

    const showPassword = () => {
        console.log(props.password)
        if (props.password === 'show') {
            props.type = 'text'
        } else {
            props.type = 'password'
        }
    }
    // switch (variant)
    // case
    // default
    return (
        <>
            <label>{props.label}</label>
            <div
                className={
                    props.variant !== 'error'
                        ? 'input-div'
                        : 'input-div error-div'
                }
            >
                {/* {left-icon ? <InputIcon /> : null} */}

                <input
                    placeholder={props.placeholder ? props.placeholder : null}
                    required
                    type={props.type}
                    className="input-field"
                ></input>
                {/* {props.type === "password"? password icon: null} */}
                {props.password === 'hide' && props.variant === 'password' ? (
                    <button onClick={showPassword}>
                        <ShowPassword />
                    </button>
                ) : null}
                {props.password === 'show' && props.variant.includes('password') ? (
                    <button onClick={showPassword}>
                        <ShowPassword />
                    </button>
                ) : null}
                {/* {right-icon ? <InputIcon /> : null} */}
                {/* {message ? <MessageOptions /> : null} */}

                {/* {props.error ? <span>{props.error}</span> : null} Check data type based on schema */}
            </div>
            {props.variant === 'error' ? (
                <div className="error-msg">
                    <CloseCircle /> <p>{props.msg}</p>
                </div>
            ) : null}
        </>
    )
}

export default InputField
