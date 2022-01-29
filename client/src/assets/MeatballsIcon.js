import * as React from 'react'

const MeatballsIcon = (props) => (
    <svg
        width={32}
        height={32}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle cx={4} cy={16} r={3}strokeWidth={2} className="navBarIcon" />
        <circle cx={28} cy={16} r={3} strokeWidth={2} className="navBarIcon"/>
        <circle cx={16} cy={16} r={3} strokeWidth={2} className="navBarIcon"/>
    </svg>
)

export default MeatballsIcon;