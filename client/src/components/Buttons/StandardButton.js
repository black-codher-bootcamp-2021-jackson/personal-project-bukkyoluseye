import React from 'react'

const StandardButton = (props) => {
    return (
        <button className="std-btn" onClick={() => props.onClick}>
            {props.label}
        </button>
    )
}

export default StandardButton
