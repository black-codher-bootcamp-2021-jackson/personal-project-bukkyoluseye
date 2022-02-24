import * as React from 'react';

const Calendar = (props) => (
    <svg
        x={0}
        y={0}
        viewBox="0 0 16 16"
        version="1.1"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g clipPath="url(#Calendar_svg__a)">
            <rect
                x={0.545}
                y={2.653}
                width={14.783}
                height={10.922}
                rx={1.575}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path  d="M.5 6.362h15" />
            <path

                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.72 1.575v2.173M11.354 1.575v2.173"
            />
            <rect
                x={3.25}
                y={9}
                width={1.5}
                height={1.5}
                rx={0.75}
                
            />
            <rect
                x={7.25}
                y={9}
                width={1.5}
                height={1.5}
                rx={0.75}
                
            />
            <rect
                x={11.25}
                y={9}
                width={1.5}
                height={1.5}
                rx={0.75}
                
            />
        </g>
        <defs>
            <clipPath id="Calendar_svg__a">
                <path fill="none" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
);

export default Calendar;

