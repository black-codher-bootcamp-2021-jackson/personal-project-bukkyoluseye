import React, { useState } from 'react'
import CloseCircle from '../assets/SVGR/CloseCircle'
import EyeHide from '../assets/SVGR/EyeHide'
import EyeShow from '../assets/SVGR/EyeShow'
import Search from '../assets/SVGR/Search'

const InputField = (props) => {
    const [passwordVisibility, setPasswordVisibility] = useState('hide')
    const ShowPassword = () => {
        // Passes the correct SVG to ShowPassword Component depending on if the user wants to see their password or not
        switch (passwordVisibility) {
            case 'show':
                return <EyeShow className="eye-show" />
            case 'hide':
                return <EyeHide className="eye-hide" />
            default:
                return <p>Error</p>
        }
    }

    const showPassword = () => {
        if (passwordVisibility === 'show') {
            setPasswordVisibility('hide')
        } else {
            setPasswordVisibility('show')
        }
    }
    // switch (variant)
    // case
    // default
    return (
        <>
            <label>{props.label ? props.label : null}</label>
            <div
                className={
                    props.variant && props.variant.includes('error')
                        ? 'input-div error-div'
                        : 'input-div'
                }
            >
                {props.variant && props.variant.includes('search') ? (
                    <Search className="search" />
                ) : null}

                <input
                    placeholder={
                        props.variant && props.variant === 'search'
                            ? 'Search'
                            : props.placeholder
                            ? props.placeholder
                            : null
                    }
                    required
                    type={
                        props.variant &&
                        props.variant.includes('password') &&
                        passwordVisibility === 'hide'
                            ? 'password'
                            : props.variant &&
                              props.variant.includes('password') &&
                              passwordVisibility === 'show'
                            ? 'text'
                            : props.type
                    }
                    className="input-field"
                ></input>
                {/* {props.type === "password"? password icon: null} */}
                {props.variant && props.variant.includes('password') ? (
                    <button className="eye" onClick={showPassword}>
                        <ShowPassword />
                    </button>
                ) : null}
                {/* {right-icon ? <InputIcon /> : null} */}
                {/* props.variant === message ? <MessageOptions /> : null} */}

                {/* {props.error ? <span>{props.error}</span> : null} Check data type based on schema */}
            </div>
            {/*props.variant === "message"? <div></div> */}
            {props.variant && props.variant.includes('error') ? (
                <div className="error-msg">
                    <CloseCircle /> <p>{props.msg}</p>
                </div>
            ) : null}
        </>
    )
}

export default InputField
