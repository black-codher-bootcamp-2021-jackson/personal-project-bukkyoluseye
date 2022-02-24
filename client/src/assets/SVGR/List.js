import * as React from 'react';

const List = (props) => (
    <svg
        width={16}
        height={16}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect
            x={1}
            y={13.75}
            width={1.928}
            height={2}
            rx={0.964}
            transform="rotate(-90 1 13.75)"
        />
        <rect
            x={1}
            y={9.222}
            width={1.928}
            height={2}
            rx={0.964}
            transform="rotate(-90 1 9.222)"
        />
        <rect
            x={1}
            y={4.694}
            width={1.928}
            height={2}
            rx={0.964}
            transform="rotate(-90 1 4.694)"
        />
        <rect
            x={5}
            y={13.55}
            width={1.364}
            height={10.005}
            rx={0.682}
            transform="rotate(-90 5 13.55)"
        />
        <rect
            x={5}
            y={8.957}
            width={1.364}
            height={10.005}
            rx={0.682}
            transform="rotate(-90 5 8.957)"
        />
        <rect
            x={5}
            y={4.364}
            width={1.364}
            height={10.005}
            rx={0.682}
            transform="rotate(-90 5 4.364)"
            
        />
    </svg>
);

export default List;

