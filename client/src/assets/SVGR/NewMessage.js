import * as React from 'react';

const NewMessage = (props) => (
    <svg
        x={0}
        y={0}
        className={props.className ? props.className : null}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M24 14.5V26a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 4 26V11a2.5 2.5 0 0 1 2.5-2.5h10.468"
            fill="none"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path d="M28.746 3.828a1.003 1.003 0 0 0-1.451-.035l-.773.77a.5.5 0 0 0 0 .706l.709.708a.5.5 0 0 0 .708 0l.754-.75c.381-.38.417-1 .053-1.399ZM24.96 6.125 13.676 17.387a.562.562 0 0 0-.144.246l-.522 1.555a.245.245 0 0 0 .304.303l1.553-.522a.563.563 0 0 0 .245-.144L26.376 7.541a.562.562 0 0 0 0-.791l-.622-.625a.562.562 0 0 0-.794 0Z" />
    </svg>
);

export default NewMessage;
