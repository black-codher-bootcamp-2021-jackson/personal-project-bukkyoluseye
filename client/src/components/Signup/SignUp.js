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
        e.preventDefault()

        const response = await axios.post(`/api/tutorprofile/signup`, {
            name: { first: {firstName}, last: {surname}},
            email: { email },
            password: { password }
        })

            // .then(call a modal to open)
            .catch(function (error) {
                console.log(error)
            });
    }


    return (
        <>
            <div className="have-you">
                <h1>Sign Up</h1>
                <p>Already have an account? </p>
                <TextLink text="Log in" href="/login" target="_self" />
            </div>
            <form onSubmit={registerTutor}>
                <InputField label="First Name*" type="text" />
                <InputField label="Surname*" type="text" />
                <InputField label="Email Address*" type="email" />
                <InputField label="Password*" variant="password" />
                <StandardButton type="submit" label="Sign Up" />
            </form>
        </>
    );
};

export default SignUp;
