import React, {useState} from 'react';
import NavBarItem from './NavBarItem';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const SideNavBar = () => {
        const [activeButton, setActiveButton] = useState('Bookings')
        const [isClicked, setIsClicked] = useState(true)

        const items = ['Bookings', 'Requests', 'Messages', 'More']
    return (
        <div id="side-nav">
            <div className="logo"></div>
            <div id="side-nav-items">
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
                                                activeButton === item &&
                                                isClicked
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
                                                activeButton === item &&
                                                isClicked
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
                                                activeButton === item &&
                                                isClicked
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
                                                activeButton === item &&
                                                isClicked
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
            <div className="dark-mode-btn"></div>
        </div>
    )
}

export default SideNavBar;