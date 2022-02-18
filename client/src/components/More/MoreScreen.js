import React from 'react';
import LogOut from '../Signup/LogOut';

const MoreScreen = (props) => {
    
    return (
        <>
            <div className="page-title">
                <h1>More</h1>
            </div>
            <LogOut
                setBookings={props.setBookings}
                setLoggedIn={props.setLoggedIn}
            />
        </>
    );
};

export default MoreScreen;
