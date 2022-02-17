import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorButton from '../Buttons/ErrorButton';

const LogOut = (props) => {
    const navigate = useNavigate();
    const handleLogout = (e) => {
        e.preventDefault();
        console.log('log out');
        localStorage.removeItem('token');
        props.setLoggedIn(false);
        navigate('/login');
    };

    return (
        <>
            <ErrorButton type="button" onClick={handleLogout} label="Log Out" />
            {console.log('more page')}
        </>
    );
};

export default LogOut;
