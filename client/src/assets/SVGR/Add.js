import * as React from 'react';

const SvgAdd = (props) => (
    <svg
        x={0}
        y={0}
        viewBox="0 0 32 32"
        version="1.1"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g clipPath="url(#Add_svg__a)">
            <path
                d="M30.008 14.008H17.992V1.992A1.998 1.998 0 0 0 16 0a1.998 1.998 0 0 0-1.992 1.992v12.016H1.992A1.998 1.998 0 0 0 0 16c0 .548.224 1.046.585 1.407s.86.585 1.407.585h12.016v12.016c0 .548.224 1.046.585 1.407.361.36.86.585 1.407.585a1.998 1.998 0 0 0 1.992-1.992V17.992h12.016A1.998 1.998 0 0 0 32 16a1.998 1.998 0 0 0-1.992-1.992Z"

                strokeWidth={0.2}
            />
        </g>
        <defs>
            <clipPath id="Add_svg__a">
                <path d="M0 0h32v32H0z" />
            </clipPath>
        </defs>
    </svg>
);

export default SvgAdd;

