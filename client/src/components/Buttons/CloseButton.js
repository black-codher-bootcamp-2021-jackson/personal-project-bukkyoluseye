import React from 'react';
import Close from '../../assets/SVGR/Close';

const CloseButton = (props) => {
    return (
        <div className="close-div" >
            <button className="close-btn" onClick={props.onClick}>
                <Close />
            </button>
        </div>
    );
};

export default CloseButton;
