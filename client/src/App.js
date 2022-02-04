import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
// import DarkMode from "./components/DarkMode";
import DarkModeWrapper from './components/DarkModeWrapper'
import BottomNavBar from './components/Navigation/BottomNavBar'
import SideNavBar from './components/Navigation/SideNavBar'
import BookingsScreen from './components/Bookings/BookingsScreen'
import './styles/App.css'
import InputField from './components/InputField'

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
        <Router>
            <DarkModeWrapper>
                <div id="main-with-nav">
                    <SideNavBar />
                    <div id="main">
                        {/* <DarkMode /> */}
              <BookingsScreen />
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
            </DarkModeWrapper>
        </Router>
    )
}

export default App
