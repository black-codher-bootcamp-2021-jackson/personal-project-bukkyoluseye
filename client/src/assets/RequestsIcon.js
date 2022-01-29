import * as React from 'react'

const RequestsIcon = (props) => (
    <svg
        width={32}
        height={32}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M25.5 4H6a3 3 0 0 0-3 3v14.376c0 1.047.848 1.895 1.895 1.895.61 0 1.105.495 1.105 1.105V28.3a.3.3 0 0 0 .507.217l4.913-4.691a2 2 0 0 1 1.382-.554H25.5a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Z"
            className="navBarIcon"
            strokeWidth={2}
        />
        <path
            d="M15.117 20.333c.739 0 1.338-.606 1.338-1.354 0-.748-.6-1.354-1.338-1.354-.74 0-1.339.606-1.339 1.354 0 .748.6 1.354 1.339 1.354Z"
            id="requestsQuestion"
        />
        <path
            d="M13.778 9.771c0-1.264 1.096-1.922 2.065-1.896 1.236.034 2.754.79 2.754 2.527 0 2.528-3.442 2.528-3.442 2.528v2.528"
            className="navBarIcon"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export default RequestsIcon;