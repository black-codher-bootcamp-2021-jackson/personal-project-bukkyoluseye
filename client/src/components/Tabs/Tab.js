import React from 'react'

const Tab = (props) => {
    return (
        <button className={`${props.label} tab`}>
            <span className="visually-hidden">Show</span>
            <span>{props.label}</span>
            <span className="visually-hidden">lessons</span>
        </button>
    );

}

export default Tab

