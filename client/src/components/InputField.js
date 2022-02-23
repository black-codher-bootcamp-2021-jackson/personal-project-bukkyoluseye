import React, { useState } from 'react';
import CloseCircle from '../assets/SVGR/CloseCircle';
import EyeHide from '../assets/SVGR/EyeHide';
import EyeShow from '../assets/SVGR/EyeShow';
import Search from '../assets/SVGR/Search';

const InputField = ({
    label,
    compulsory,
    variant,
    placeholder,
    onChange,
    value,
    type,
    msg,
    required,
}) => {
    const [passwordVisibility, setPasswordVisibility] = useState('hide');
    const ShowPassword = () => {
        // Passes the correct SVG to ShowPassword Component depending on if the user wants to see their password or not
        switch (passwordVisibility) {
            case 'show':
                return <EyeShow className="eye-show" />;
            case 'hide':
                return <EyeHide className="eye-hide" />;
            default:
                return <p>Error</p>;
        }
    };

    const showPassword = () => {
        if (passwordVisibility === 'show') {
            setPasswordVisibility('hide');
        } else {
            setPasswordVisibility('show');
        }
    };
    // switch (variant)
    // case
    // default
    return (
        <>
            <label>{compulsory ? label + '*' : label ? label : null}</label>
            <div
                className={
                    variant && variant.includes('error')
                        ? 'input-div error-div'
                        : 'input-div'
                }
            >
                {variant && variant.includes('search') ? (
                    <Search className="search" />
                ) : null}

                <input
                    className="input-field"
                    placeholder={
                        placeholder
                            ? placeholder
                            : variant && variant === 'search'
                            ? 'Search'
                            : null
                    }
                    required={required ? required : null}
                    type={
                        variant &&
                        variant.includes('password') &&
                        passwordVisibility === 'hide'
                            ? 'password'
                            : variant &&
                              variant.includes('password') &&
                              passwordVisibility === 'show'
                            ? 'text'
                            : type
                    }
                    onChange={onChange ? onChange : null}
                    defaultValue={value ? value : ''}
                ></input>
                {/* {type === "password"? password icon: null} */}
                {variant && variant.includes('password') ? (
                    <button
                        className="eye"
                        onClick={showPassword}
                        
                    >
                        <ShowPassword />
                    </button>
                ) : null}
                {/* {right-icon ? <InputIcon /> : null} */}
                {/* variant === message ? <MessageOptions /> : null} */}

                {/* {error ? <span>{error}</span> : null} Check data type based on schema */}
            </div>
            {/*variant === "message"? <div></div> */}
            {variant && variant.includes('error') ? (
                <div className="error-msg">
                    <CloseCircle /> <p>{msg}</p>
                </div>
            ) : null}
        </>
    );
};

export default InputField;
