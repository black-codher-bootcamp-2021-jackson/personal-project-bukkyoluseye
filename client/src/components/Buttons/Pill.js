import React, { useState } from 'react';
import Add from '../../assets/SVGR/Add';
import Close from '../../assets/SVGR/Close';

const Pill = (props) => {
    const [icon, setIcon] = useState(<Add />);
    const [active, setActive] = useState(false);

    const onClick = () => {
        if (!active) {
            setIcon(<Close />);
        } else {
            setIcon(<Add />);
        }
        setActive(!active);
    };

    return (
        <>
            <button
                aria-pressed={active}
                onClick={onClick}
                className={`pill-btn ${
                    active ? 'active-pill' : 'inactive-pill'
                }`}
            >
                {icon}
                <span>{props.name}</span>
            </button>
        </>
    );
};

export default Pill;
