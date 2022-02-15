import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import InputField from '../InputField';
import TextLink from '../Buttons/TextLink';
import StandardButton from '../Buttons/StandardButton';

const SignUp = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState();
    const [surname, setSurname] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function registerTutor(e) {
        e.preventDefault();

        await axios
            .post(`/api/tutorprofile/signup`, {
                firstname: firstName,
                surname: surname,
                email: email,
                password: password,
            })
            .then((window.location.href = '/login'))
            // .then(call a modal to open)
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <div className="have-you">
                <h1>Sign Up</h1>
                <p>Already have an account? </p>
                <TextLink text="Log in" href="/login" target="_self" />
            </div>
            <form id="signup" onSubmit={registerTutor}>
                <InputField
                    label="First Name*"
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <InputField
                    label="Surname*"
                    type="text"
                    onChange={(e) => setSurname(e.target.value)}
                />
                <InputField
                    label="Email Address*"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputField
                    label="Password*"
                    variant="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <StandardButton form="signup" type="submit" label="Sign Up" />
            </form>
        </>
    );
};

export default SignUp;
