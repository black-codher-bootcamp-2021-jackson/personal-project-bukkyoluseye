import React from 'react'
import { Link } from 'react-router-dom'
import BookingsIcon from '../../assets/BookingsIcon'
import RequestsIcon from '../../assets/RequestsIcon'
import SchoolsIcon from '../../assets/SchoolsIcon'
import MessagesIcon from '../../assets/MessagesIcon'
import MeatballsIcon from '../../assets/MeatballsIcon'

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

   // console.log('are you working?')
    // Check if button is active using an eventlister. The default
    // const activeNavBarItem = (e) => {
    //     e.preventDefault()
    //     let previousActiveNavBarItem = document.getElementsByClassName('active-nav-bar-item')
    //     console.log(previousActiveNavBarItem)
    //     previousActiveNavBarItem[0].className -= ' active-nav-bar-item'
    //     this.className += ' active-nav-bar-item'
    // }
    // for (var i = 0; i < btns.length; i++) {
    //     btns[i].addEventListener('click', function () {
    //         var current = document.getElementsByClassName('active')
    //         current[0].className = current[0].className.replace(' active', '')
    //         this.className += ' active'
    //     })
    // }
    // I want my icon to take any svg in as a prop
// window.localStorage.setItem('state', JSON.stringify(state)) 
