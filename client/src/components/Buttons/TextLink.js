import React from 'react'

const TextLink = (props) => {
    const Icon = (props) => {
        return <>{props.icon}</>
    }
    return (
        <a
            className="text-link"
            href={props.href}
            target="_blank"
            rel="noreferrer"
        >
            <p>{props.text}</p>
            {props.icon ? <Icon /> : null}
        </a>
    )
}

export default TextLink
