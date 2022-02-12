import React from 'react';

const StandardButton = (props) => {
    return (
        <button
            className="std-btn"
            type={props.type ? props.type : null}
            onClick={() => props.onClick}
        >
            {props.label}
        </button>
    );
};

export default StandardButton;
