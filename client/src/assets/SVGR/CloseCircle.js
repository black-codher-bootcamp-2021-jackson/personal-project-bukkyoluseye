import * as React from 'react'

const CloseCircle = (props) => (
    <svg
        fill="none"
        viewBox="0 0 512 512"
        version="1.1"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M494 256c0-131.396-106.604-238-238-238C124.604 18 18 124.604 18 256c0 131.396 106.604 238 238 238 131.396 0 238-106.604 238-238Z"
            strokeMiterlimit={10}
        />
        <path
            d="m176 336 160-160m0 160L176 176l160 160Z"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export default CloseCircle