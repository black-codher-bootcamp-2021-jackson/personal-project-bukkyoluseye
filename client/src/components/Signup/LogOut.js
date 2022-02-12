import React, { useState } from 'react';
import StandardButton from '../Buttons/StandardButton';

const LogOut = () => {
    const user = localStorage.getItem(user);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);

    const handleLogout = () => {
        setUser({});
        setEmail('');
        setPassword('');
        localStorage.clear();
    };
    return <>{user ? <StandardButton onClick={ handleLogout} label="Log Out" /> : null}</>;
};

export default LogOut;
