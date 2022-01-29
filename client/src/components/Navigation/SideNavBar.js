import React from 'react';
import NavBarItem from './NavBarItem';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const SideNavBar = () => {
    return (
        <div id="side-nav">
            <div id="side-nav-items">
                <Router>
                    <Routes>
                        <Route path ="/" id="bookingslink" element={
                            <>
                                <NavBarItem screen="Bookings"/>
                                <NavBarItem screen="Requests"/>
                                <NavBarItem screen="Messages"/>
                                <NavBarItem screen="More"/>
                            </>} />
                        <Route path ="/requests" id="requestslink" element={
                            <>
                                <NavBarItem screen="Bookings"/>
                                <NavBarItem screen="Requests"/>
                                <NavBarItem screen="Messages"/>
                                <NavBarItem screen="More"/>
                            </>} />
                        <Route path ="/messages" id="messageslink" element={
                            <>
                                <NavBarItem screen="Bookings"/>
                                <NavBarItem screen="Requests"/>
                                <NavBarItem screen="Messages"/>
                                <NavBarItem screen="More"/>
                            </>} />
                        <Route path ="/more" id="morelink" element={
                            <>
                                <NavBarItem screen="Bookings"/>
                                <NavBarItem screen="Requests"/>
                                <NavBarItem screen="Messages"/>
                                <NavBarItem screen="More"/>
                            </> } />
                    </Routes>
                </Router>
            </div>
        </div>
    )
}

export default SideNavBar;