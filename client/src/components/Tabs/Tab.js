import React from 'react';

const Tab = (props) => {
    return (
        <button
            type="button"
            className={`${props.label} tab`}
            aria-pressed={props.isPressed}
            onClick={() => props.setFilter(props.label)}
        >
            <span className="visually-hidden">Show </span>
            <span>{props.label}</span>
            <span className="visually-hidden">{props.labelType? ` ${props.labelType}` : null}</span>
        </button>
    );
};

export default Tab;
