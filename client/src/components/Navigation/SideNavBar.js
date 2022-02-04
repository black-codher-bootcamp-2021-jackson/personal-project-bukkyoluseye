import React, {useState} from 'react';
import NavBarItem from './NavBarItem';
import {useLocation } from 'react-router-dom';
import DarkModeButton from '../DarkModeButton';



const SideNavBar = (props) => {
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
        <div id="side-nav" className="nav-bar">
            <div className="logo"></div>
            <div id="side-nav-items">
                <>{navItems}</>
            </div>
            <div className="dark-mode-btn">
                <DarkModeButton onClick={props.onClick}/>
            </div>
        </div>
    )
}

export default SideNavBar;