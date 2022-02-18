import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorButton from '../Buttons/ErrorButton';

const LogOut = (props) => {
    const navigate = useNavigate();
    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        props.setLoggedIn(false);
        props.setBookings([])
        navigate('/login');
    };

    return (
        <>
            <ErrorButton type="button" onClick={handleLogout} label="Log Out" />
        </>
    );
};

export default LogOut;
