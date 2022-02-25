import * as React from 'react';

const Checkmark = (props) => (
    <svg
        x={0}
        y={0}
        viewBox="0 0 24 24"
        version="1.1"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="m31.83 5.277-2.614-3.073A.531.531 0 0 0 28.798 2a.51.51 0 0 0-.416.204l-18.13 20.868-6.597-7.539a.554.554 0 0 0-.416-.204.554.554 0 0 0-.417.204L.178 18.555a.746.746 0 0 0 0 .968l8.322 9.51c.535.61 1.189.967 1.739.967.787 0 1.471-.662 1.724-.934h.014L31.846 6.245c.208-.289.208-.713-.015-.968Z" />
    </svg>
);

export default Checkmark;
