import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
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
    // const navigate = useNavigate();

    // Verify user is logged in
    useEffect(() => {
        const token = localStorage.getItem('token');
        
        if (token) {
            console.log('yes, I have the token');
            const user = jwt_decode(token);
            if (!user) {
                localStorage.removeItem('token');
                window.location.href = '/login';
            } else {
                console.log("yes, you've logged in");
                setLoggedIn(true);
                getBookings();
            }
        }
    }, []);

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

    async function getBookings() {
        // console.log("get bookings",bookings)
        if (!bookings || bookings.length === 0) {
            const response = await getAllBookings();
            setBookings(response);
        }
    }


    return (
        <DarkModeWrapper>
            <Router>
                <Routes>
                    <Route path="/" id="sign-up" element={<SignUp />} />
                    <Route path="/login" id="log-in" element={<LogIn setLoggedIn={setLoggedIn}/>} />
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
                                    <MoreScreen />
                                ) : (
                                    <Navigate to="/login" />
                                )}
                            </>
                        }
                    />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>

                {window.location.pathname === '/login' ||
                window.location.pathname === '/' ? null : (
                    <SideNavBar />
                )}

                {window.location.pathname === '/login' ||
                window.location.pathname === '/' ? null : (
                    <BottomNavBar />
                )}
            </Router>
        </DarkModeWrapper>
    );
}

export default App;
