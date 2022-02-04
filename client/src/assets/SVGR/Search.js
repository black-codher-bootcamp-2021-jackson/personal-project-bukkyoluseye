import * as React from 'react'

const Search = (props) => (
    <svg
        viewBox="0 0 32 32"
        version="1.1"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M13.818 4a9.818 9.818 0 1 0 0 19.636 9.818 9.818 0 0 0 0-19.636Z"
            strokeWidth={3}
            strokeMiterlimit={10}
        />
        <path
            d="M21.144 21.143 28 28"
            strokeWidth={3}
            strokeMiterlimit={10}
            strokeLinecap="round"
        />
    </svg>
)

export default Search
