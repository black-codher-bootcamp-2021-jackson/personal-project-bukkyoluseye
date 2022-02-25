import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import NavBarItem from './NavBarItem'
import BookingsScreen from '../Bookings/BookingsScreen'



const BottomNavBar = () => {
    const location = useLocation();
    const [activeButton, setActiveButton] = useState(location.pathname);

    const [isClicked, setIsClicked] = useState(true)

    const items = ['bookings', 'requests', 'messages', 'more']

    const navItems = items.map((item) => (
        <NavBarItem
            key={item}
            screen={item}
            isActive={
                (activeButton === item && isClicked) ||
                location.pathname === `/${item}`
            }
            aria-current={
                (activeButton === item && isClicked) ||
                location.pathname === `/${item}`
                    ? 'page'
                    : false
            }
            setActiveButton={setActiveButton}
            setIsClicked={setIsClicked}
        />
    ));

    return (
        <div id="bottom-nav" className="nav-bar">
                        <>{navItems}</>
        </div>
    );
}

export default BottomNavBar
