import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';
// import DarkMode from "./components/DarkMode";
import DarkModeWrapper from './components/DarkModeWrapper';
import BottomNavBar from './components/Navigation/BottomNavBar';
import SideNavBar from './components/Navigation/SideNavBar';
import BookingsScreen from './components/Bookings/BookingsScreen';
import './styles/App.css';
import LogIn from './components/Signup/Login';
import SignUp from './components/Signup/SignUp';
import RequestsScreen from './components/Requests/RequestsScreen';
import MessagesScreen from './components/Messages/MessagesScreen';
import MoreScreen from './components/More/MoreScreen';
import jwt_decode from 'jwt-decode';

// SERVICES THAT CALL OUR API ENDPOINTS
import {
    getAllTutorProfiles,
    getAllStudentProfiles,
    getAllBookings,
} from './services/tutorAppService';

function App() {
    const [tutorprofiles, setTutorProfiles] = useState([]);
    const [studentprofiles, setStudentProfiles] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);

    // Verify user is logged in
    useEffect(() => {
        if(!loggedIn){
            const token = localStorage.getItem('token');
        
            if (token) {
                const user = jwt_decode(token);
                if (!user) {
                    localStorage.removeItem('token');
                } else {
                    setLoggedIn(true);
                    async function getBookings() {
                        if (!bookings || bookings.length === 0) {
                            const response = await getAllBookings(user.id);
                            setBookings(response);
                        }
                    }
                    getBookings();
                }
            }

            else {
                const controller = new AbortController();
                controller.abort();
            }
        }
    }, [loggedIn, bookings]);

    useEffect(() => {
        async function getTutorProfiles() {
            if (!tutorprofiles) {
                const response = await getAllTutorProfiles();
                setTutorProfiles(response);
            }
        }

        getTutorProfiles();
    }, [tutorprofiles]);

    useEffect(() => {
        async function getStudentProfiles() {
            if (!studentprofiles) {
                const response = await getAllStudentProfiles();
                setStudentProfiles(response);
            }
        }
        getStudentProfiles();
    }, [studentprofiles]);

    return (
        <DarkModeWrapper>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        id="sign-up"
                        element={
                            loggedIn ? <Navigate to="/bookings" /> : <SignUp />
                        }
                    />
                    <Route
                        path="/login"
                        id="log-in"
                        element={
                            loggedIn ? (
                                <Navigate to="/bookings" />
                            ) : (
                                <LogIn setLoggedIn={setLoggedIn} />
                            )
                        }
                    />
                    <Route
                        path="/bookings"
                        id="bookingslink"
                        element={
                            <>
                                {loggedIn ? (
                                    <BookingsScreen bookings={bookings} />
                                ) : (
                                    <Navigate to="/login" />
                                )}
                            </>
                        }
                    />
                    <Route
                        path="/requests"
                        id="requestslink"
                        element={
                            <>
                                {loggedIn ? (
                                    <RequestsScreen />
                                ) : (
                                    <Navigate to="/login" />
                                )}
                            </>
                        }
                    />
                    {console.log(loggedIn)}
                    <Route
                        path="/messages"
                        id="messageslink"
                        element={
                            <>
                                {loggedIn ? (
                                    <MessagesScreen />
                                ) : (
                                    <Navigate to="/login" />
                                )}
                            </>
                        }
                    />
                    <Route
                        path="/more"
                        id="morelink"
                        element={
                            <>
                                {loggedIn ? (
                                    <MoreScreen setBookings={setBookings} setLoggedIn={setLoggedIn} />
                                ) : (
                                    <Navigate to="/login" />
                                )}
                            </>
                        }
                    />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>

                {!loggedIn ? null : <SideNavBar />}

                {!loggedIn ? null : <BottomNavBar />}
            </Router>
        </DarkModeWrapper>
    );
}

export default App;
