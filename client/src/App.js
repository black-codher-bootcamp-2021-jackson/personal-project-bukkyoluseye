import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import DarkMode from "./components/DarkMode";
import DarkModeWrapper from './components/DarkModeWrapper'
import BottomNavBar from './components/Navigation/BottomNavBar'
import SideNavBar from './components/Navigation/SideNavBar'
import BookingsScreen from './components/Bookings/BookingsScreen'
import './styles/App.css'
import InputField from './components/InputField'
import LogIn from './components/Signup/Login'
import SignUp from './components/Signup/SignUp'

// SERVICES THAT CALL OUR API ENDPOINTS
// import { getAllProfiles } from "./services/profileService";

function App() {
    //Get rid of stuff below
    // const [profiles, setProfiles] = useState(null);

    // useEffect(() => {
    //   async function getProfiles() {
    //     if (!profiles) {
    //       const response = await getAllProfiles();
    //       setProfiles(response);
    //     }
    //   }

    //   getProfiles();
    // }, [profiles]);

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

                  <Route path="/requests" id="requestslink" element={<></>} />
                  <Route path="/messages" id="messageslink" element={<></>} />
                  <Route path="/more" id="morelink" element={<></>} />
              </Routes>

              <div id="main-with-nav">
                  <SideNavBar />
                  <div id="main">
                      {/* <DarkMode /> */}

                      {/* :null} */}

                      {/* <ul>
        {profiles && profiles.length > 0 ? (
          profiles.map((profile) => renderProfile(profile))
        ) : (
          <p>No profiles found</p>
        )}
      </ul> */}

                      <BottomNavBar />
                  </div>
              </div>
          </Router>
      </DarkModeWrapper>
  )
}

export default App
