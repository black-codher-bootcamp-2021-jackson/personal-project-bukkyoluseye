import React from 'react'
import { Link } from 'react-router-dom'
import BookingsIcon from '../../assets/SVGR/BookingsIcon'
import RequestsIcon from '../../assets/SVGR/RequestsIcon'
import SchoolsIcon from '../../assets/SVGR/SchoolsIcon'
import MessagesIcon from '../../assets/SVGR/MessagesIcon'
import MeatballsIcon from '../../assets/SVGR/MeatballsIcon'

const NavBarIcon = (props) => {
    // Passes the correct SVG to NavBarIcon Component depending on screen name
    switch (props.screen) {
        case 'bookings':
            return <BookingsIcon />
        case 'requests':
            return <RequestsIcon />
        case 'schools':
            return <SchoolsIcon />
        case 'messages':
            return <MessagesIcon />
        case 'more':
            return <MeatballsIcon />
        default:
            return <p>Error</p>
    }
}

const NavBarItem = (props) => {
 
    return (
        <>
            <Link
                to={`/${props.screen}`}
                id={props.screen}
                className={`nav-bar-item ${
                    props.isActive ? 'activeButton' : null
                }`}
                onClick={() => {
                    props.setIsClicked(true)
                    props.setActiveButton(props.screen)
                }}
            >
                <NavBarIcon screen={props.screen} id={`${props.screen}-icon`} />
                <span className="nav-label">
                    {props.screen.charAt(0).toUpperCase() +
                        props.screen.slice(1)}
                </span>
            </Link>
        </>
    )
}

export default NavBarItem

