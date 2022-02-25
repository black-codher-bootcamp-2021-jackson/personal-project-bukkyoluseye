import React from 'react';

const Button = (props) => {
    return (
        <button
           
            variant={props.variant ? props.variant : null}
            className={`std-btn ${props.variant ? props.variant : ""}`}
            type={props.type ? props.type : null}
            onClick={props.onClick ? props.onClick : null}
            form={props.form ? props.form : null}
        >
            {props.label}
        </button>
    );
};

export default Button;
