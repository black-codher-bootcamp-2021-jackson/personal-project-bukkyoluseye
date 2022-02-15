import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, } from 'react-router-dom';
import InputField from '../InputField';
import TextLink from '../Buttons/TextLink';
import StandardButton from '../Buttons/StandardButton';

const LogIn = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



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
        console.log(email);
        const response = await axios
            .post(`/api/tutorprofile/login`, {
                email: email,
                password: password,
            })

            // .then(call a modal to open)
            // .catch(function (error) {
            //     console.log(error);
            // });
        console.log(response);

        const data = response.data;

        if (data.tutorprofile) {
            localStorage.setItem('token', data.tutorprofile);
            props.setLoggedIn(true);
         navigate('/bookings');
        } else {
            alert(data.error);
        }

        // When the authentication is done
        // Redirect the user to the `/profile/${userName}` page
        // the below code adds the `/profile/${userName}` page
        // to the history stack.
        // navigate(`/bookings`);
    };

    // if email===email && password === password {let them sign in} else
    return (
        <>
            <div className="have-you">
                <h1>Login</h1>
                <p>New here? </p>
                <TextLink text="Sign up" href="/" target="_self" />
            </div>
            <form onSubmit={loginTutor}>
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
                <StandardButton type="submit" label="Log In" />
            </form>
        </>
    );
};

export default LogIn;
