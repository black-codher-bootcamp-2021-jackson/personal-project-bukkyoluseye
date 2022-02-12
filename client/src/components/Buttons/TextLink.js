import React from 'react';

const TextLink = (props) => {

    return (
        <a
            className={"text-link " + props.className}
            href={props.href}
            target={props.target ? props.target : '_blank'}
            rel="noreferrer"
        >
            <p>{props.text}</p>
            {props.icon ? props.icon : null}
        </a>
    );
};

export default TextLink;
