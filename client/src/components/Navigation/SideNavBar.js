import React, {useState} from 'react';
import NavBarItem from './NavBarItem';
import { Route, Routes, useLocation } from 'react-router-dom';
import BottomNavBar from './BottomNavBar';


const SideNavBar = () => {
        const location = useLocation()
        const [activeButton, setActiveButton] = useState(location.pathname)

        const [isClicked, setIsClicked] = useState(true)

        const items = ['Bookings', 'Requests', 'Messages', 'More']
    return (
        <div id="side-nav">
            <div className="logo"></div>
            <div id="side-nav-items">
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
                                                location.pathname === item
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
                                                location.pathname === item
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
            <div className="dark-mode-btn"></div>
        </div>
    )
}

export default SideNavBar;