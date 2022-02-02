import React, { useState } from 'react'
import NavBarItem from './NavBarItem'
import { Route, Routes, useLocation } from 'react-router-dom'


const BottomNavBar = () => {
    const location = useLocation();
    const [activeButton, setActiveButton] = useState(location.pathname);
    //        window.localStorage.getItem('state')
    // ? JSON.parse(window.localStorage.getItem('state'))
    console.log(activeButton)
    console.log(location)
    const [isClicked, setIsClicked] = useState(true)

    const items = ['Bookings', 'Requests', 'Messages', 'More']

    return (
        <div id="bottom-nav">
            <>
                <Routes>
                    <Route
                        path="/"
                        id="bookingslink"
                        element={
                            <>
                                {items.map((item) => (
                                    <NavBarItem
                                        key={item}
                                        screen={item}
                                        isActive={
                                            (activeButton === item &&
                                                isClicked) ||
                                                 location.pathname ===
                                                  `/${item}`
                                        }
                                        setActiveButton={setActiveButton}
                                        setIsClicked={setIsClicked}
                                    />
                                ))}
                            </>
                        }
                    />
                    <Route
                        path="/requests"
                        id="requestslink"
                        element={
                            <>
                                {items.map((item) => (
                                    <NavBarItem
                                        key={item}
                                        screen={item}
                                        isActive={
                                            (activeButton === item &&
                                                isClicked) ||
                                            location.pathname ===
                                            `/${item}`}
                                        setActiveButton={setActiveButton}
                                        setIsClicked={setIsClicked}
                                    />
                                ))}
                            </>
                        }
                    />
                    <Route
                        path="/messages"
                        id="messageslink"
                        element={
                            <>
                                {items.map((item) => (
                                    <NavBarItem
                                        key={item}
                                        screen={item}
                                        isActive={
                                            (activeButton === item &&
                                                isClicked) ||
                                            location.pathname === item
                                        }
                                        setActiveButton={setActiveButton}
                                        setIsClicked={setIsClicked}
                                    />
                                ))}
                                {console.log(activeButton)}
                            </>
                        }
                    />
                    <Route
                        path="/more"
                        id="morelink"
                        element={
                            <>
                                {items.map((item) => (
                                    <NavBarItem
                                        key={item}
                                        screen={item}
                                        isActive={
                                            (activeButton === item &&
                                                isClicked) ||
                                            location.pathname === item
                                        }
                                        setActiveButton={setActiveButton}
                                        setIsClicked={setIsClicked}
                                    />
                                ))}
                            </>
                        }
                    />
                </Routes>
            </>
        </div>
    )
}

export default BottomNavBar
