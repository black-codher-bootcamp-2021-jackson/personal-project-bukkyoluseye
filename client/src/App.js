import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllTutorProfiles } from "./services/tutorProfilesService"

function App() {
    const [tutorprofiles, setTutorProfiles] = useState(null);
    //Get rid of stuff below


    useEffect(() => {
      async function getTutorProfiles() {
        if (!tutorprofiles) {
          const response = await getAllTutorProfiles();
          setTutorProfiles(response);
        }
      }

      getTutorProfiles();
    }, [tutorprofiles]);

    // const renderProfile = (user) => {
    //   return (
    //     <li key={user._id}>
    //       <h3>
    //         {`${user.first_name}
    //         ${user.last_name}`}
    //       </h3>
    //       <p>{user.location}</p>
    //     </li>
    //   );
    // };

    return (
        <DarkModeWrapper>
            <Router>
                <Routes>
                    <Route path="/" id="sign-up" element={<SignUp />} />
                    <Route path="/login" id="log-in" element={<LogIn />} />
                    <Route
                        path="/bookings"
                        id="bookingslink"
                        element={
                            <>
                                <BookingsScreen />
                            </>
                        }
                    />
                    <Route
                        path="/requests"
                        id="requestslink"
                        element={
                            <>
                                <RequestsScreen />
                            </>
                        }
                    />
                    <Route
                        path="/messages"
                        id="messageslink"
                        element={
                            <>
                                <MessagesScreen />
                            </>
                        }
                    />
                    <Route
                        path="/more"
                        id="morelink"
                        element={
                            <>
                                <MoreScreen />
                            </>
                        }
                    />
                </Routes>

                <SideNavBar />

                <BottomNavBar />
            </Router>
        </DarkModeWrapper>
    );
}

export default App;
