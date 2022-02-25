import React, { useState } from 'react';
import axios from 'axios';
import InputField from '../InputField';
import TextLink from '../Buttons/TextLink';
import Button from '../Buttons/Button';
import { getAllBookings } from '../../services/tutorAppService';

const LogIn = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bookings, setBookings] = useState([]);

    

    // useEffect(() => {
    //     const loggedInUser = localStorage.getItem("user")
    //     if (loggedInUser) {
    //         const foundUser = JSON.parse(loggedInUser);
    //         setUser(foundUser)
    //     }
    // }, [])

    // log in the user
    const loginTutor = async (e) => {
        e.preventDefault();
        const response = await axios.post(`/api/tutorprofile/login`, {
            email: email,
            password: password,
        });

        const data = response.data;

        if (data.tutorprofile) {
            localStorage.setItem('token', data.tutorprofile);
            async function getBookings() {
                if (!bookings || bookings.length === 0) {
                    const response = await getAllBookings();
                    setBookings(response);
                }
            }
            getBookings();
            props.setLoggedIn(true);
            setEmail("");
            setPassword('');
        } else {
            alert(data.error);
        }
    };

    return (
        <div className="login-signup">
            <div className="have-you">
                <h1>Login</h1>
                <div className="switch-login">
                <p>New here? </p>
                    <TextLink text="Sign up" href="/" target="_self" />
                    </div>
            </div>
            <form onSubmit={loginTutor}>
                <InputField
                    label="Email Address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    compulsory
                />
                <InputField
                    label="Password"
                    variant="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required="required"
                    compulsory
                />
                <Button variant="primary" type="submit" label="Log In" />
            </form>
        </div>
    );
};

export default LogIn;
