import * as React from 'react'

const MeatballsIcon = (props) => (
    <svg
        viewBox="0 0 32 32"
        version="1.1"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle cx={4} cy={16} r={3} strokeWidth={2} className="navBarIcon" />
        <circle cx={28} cy={16} r={3} strokeWidth={2} className="navBarIcon" />
        <circle cx={16} cy={16} r={3} strokeWidth={2} className="navBarIcon" />
    </svg>
)

export default MeatballsIcon;