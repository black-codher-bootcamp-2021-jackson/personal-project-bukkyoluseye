import React from 'react';
import { Link } from 'react-router-dom';
import BookingsIcon from '../../assets/BookingsIcon';
import RequestsIcon from '../../assets/RequestsIcon';
import SchoolsIcon from '../../assets/SchoolsIcon';
import MessagesIcon from '../../assets/MessagesIcon';
import MeatballsIcon from '../../assets/MeatballsIcon';

const NavBarIcon = (props) => {
    // Passes the correct SVG to NavBarIcon Component depending on screen name
    switch(props.screen) {
        case 'Bookings':
            return <BookingsIcon />
        case 'Requests':
            return <RequestsIcon />
        case 'Schools':
            return <SchoolsIcon />
        case 'Messages':
            return <MessagesIcon />
        case 'More':
            return <MeatballsIcon />
        default:
            return <p>Error</p>
    }
}

const NavBarItem = (props) => {
    // console.log('are you working?')
    // I want my icon to take any svg in as a prop
    
    return (
        <>
            <Link to={props.screen === "Bookings"? "/" : `/${props.screen}`} id={props.screen} className='nav-bar-item'> 
                <NavBarIcon screen={props.screen} id={`${props.screen}-icon`}/>
                <span>{props.screen}</span>
            </Link>
        </>
    )
} 

export default NavBarItem;