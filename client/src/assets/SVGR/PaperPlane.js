import * as React from 'react';

const PaperPlane = (props) => (
    <svg
        x={0}
        y={0}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g clipPath="url(#paper-plane_svg__a)">
            <path
                d="M31.214 15.963a1.715 1.715 0 0 0-1.013-1.564L2.348 1.841l-.004-.004A1.714 1.714 0 0 0 .114 4.17l.014.027L4.1 14.092a1.143 1.143 0 0 0 .967.604l21.501.76a.504.504 0 1 1 0 1.01l-21.497.753a1.143 1.143 0 0 0-.966.604L.129 27.724a.648.648 0 0 0-.019.039c-.307.63-.228 1.369.245 1.886l.05.05a1.759 1.759 0 0 0 1.943.381l27.846-12.553a1.715 1.715 0 0 0 1.02-1.564Z"

            />
        </g>
        <defs>
            <clipPath id="paper-plane_svg__a">
                <path d="M0 0h32v32H0z" />
            </clipPath>
        </defs>
    </svg>
);

export default PaperPlane;

