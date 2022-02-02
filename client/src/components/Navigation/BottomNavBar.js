import React, { useState } from 'react'
import NavBarItem from './NavBarItem'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const BottomNavBar = () => {
    const [activeButton, setActiveButton] = useState("")
    //        window.localStorage.getItem('state')
    // ? JSON.parse(window.localStorage.getItem('state'))
    console.log(activeButton)
    const [isClicked, setIsClicked] = useState(true)

    const items = ['Bookings', 'Requests', 'Messages', 'More']

    return (
        <div id="bottom-nav">
            <Router>
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
                                            activeButton === item && isClicked
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
                                            activeButton === item && isClicked
                                        }
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
                                            activeButton === item && isClicked
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
                                            activeButton === item && isClicked
                                        }
                                        setActiveButton={setActiveButton}
                                        setIsClicked={setIsClicked}
                                    />
                                ))}
                            </>
                        }
                    />
                </Routes>
            </Router>
        </div>
    )
}

export default BottomNavBar
