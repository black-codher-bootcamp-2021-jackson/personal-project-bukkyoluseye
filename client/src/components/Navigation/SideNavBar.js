import React, {useState} from 'react';
import NavBarItem from './NavBarItem';
import { Route, Routes, useLocation } from 'react-router-dom';


const SideNavBar = () => {
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
        <div id="side-nav">
            <div className="logo"></div>
            <div id="side-nav-items">
                <>
                    <Routes>
                        <Route
                            path="/bookings"
                            id="bookingslink"
                            element={<>{navItems}</>}
                        />
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
                                    {console.log(activeButton)}
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
            <div className="dark-mode-btn"></div>
        </div>
    )
}

export default SideNavBar;