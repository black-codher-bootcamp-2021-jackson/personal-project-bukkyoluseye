import * as React from 'react'

const MessagesIcon = (props) => (
    <svg
        width={32}
        height={32}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect
            x={2}
            y={6}
            width={27.438}
            height={19.696}
            rx={2}
            className="navBarIcon"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="m3 8.17 12.83 8.849L28.438 8.17"
            className="navBarIcon"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export default MessagesIcon;