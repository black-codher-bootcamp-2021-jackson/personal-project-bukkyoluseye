import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
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
            setActiveButton={setActiveButton}
            setIsClicked={setIsClicked}
        />
    ))

    return (
        <div id="bottom-nav" className="nav-bar">
            <>
                <Routes>
                    <Route
                        path="/bookings"
                        id="bookingslink"
                        element={
                            <>
                                {navItems}
                            </>
                        }
                    >
                    </Route>
                    <Route
                        path="/requests"
                        id="requestslink"
                        element={<>{navItems}</>}
                    />
                    <Route
                        path="/messages"
                        id="messageslink"
                        element={
                            <>
                                {navItems}
                            </>
                        }
                    />
                    <Route
                        path="/more"
                        id="morelink"
                        element={<>{navItems}</>}
                    />
                </Routes>
            </>
        </div>
    )
}

export default BottomNavBar
