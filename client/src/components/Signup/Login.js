import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import InputField from '../InputField';
import TextLink from '../Buttons/TextLink';
import StandardButton from '../Buttons/StandardButton';

const LogIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user")
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser)
        }
    }, [])

    // log in the user
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { email, password };
        // send the username and password to the server
        const response = await axios.post('/api/login', user);
        // Authenticate the user
        // authenticateUser(email, password); if user is authenticated then do the follwoing
        // set the state of the user
        setUser(response.data);
        // store the user in localStorage
        localStorage.setItem('user', JSON.stringify(response.data));

        // When the authentication is done
        // Redirect the user to the `/profile/${userName}` page
        // the below code adds the `/profile/${userName}` page
        // to the history stack.
        navigate(`/bookings`);
    };

    return (
        <>
            <div className="have-you">
                <h1>Login</h1>
                <p>New here? </p>
                <TextLink text="Sign up" href="/" target="_self" />
            </div>
            <form onSubmit={handleSubmit}>
                <InputField
                    label="Email Address*"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required="required"
                />
                <InputField
                    label="Password*"
                    variant="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required="required"
                />
                <StandardButton type="submit" label="Sign Up" />
            </form>
        </>
    );
};

export default LogIn;
