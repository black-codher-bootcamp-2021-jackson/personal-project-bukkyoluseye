import React from 'react';
import LogOut from '../Signup/LogOut';
import SignupForm from '../Signup/SignupForm';
import Pill from '../Buttons/Pill';
import ConfirmModal from '../ConfirmModal';

const MoreScreen = (props) => {
    
    return (
        <>
            <div className="page-title">
                <h1 >More</h1>
            </div>
            <LogOut
                setBookings={props.setBookings}
                setLoggedIn={props.setLoggedIn}
            />
            <SignupForm />
            <ConfirmModal />
        </>
    );
};

export default MoreScreen;
