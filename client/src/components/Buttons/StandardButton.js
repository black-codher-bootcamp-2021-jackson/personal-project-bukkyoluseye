import React from 'react';

const StandardButton = (props) => {
    return (
        <button
            className="std-btn"
            type={props.type ? props.type : null}
            onClick={props.onClick? () => props.onClick: null}
            form={props.form? props.form : null}
        >
            {props.label}
        </button>
    );
};

export default StandardButton;
