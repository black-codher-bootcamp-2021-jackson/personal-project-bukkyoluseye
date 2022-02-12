import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../InputField';
import TextLink from '../Buttons/TextLink';
import StandardButton from '../Buttons/StandardButton';

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState();

    async function registerUser(e) {
        e.preventDefault()

        const response = await fetch(`/api/tutorlogin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user,
                email,
                password,
            }),
        });
            const data = await response.json();
            console.log(data);
    }


    return (
        <>
            <div className="have-you">
                <h1>Sign Up</h1>
                <p>Already have an account? </p>
                <TextLink text="Log in" href="/login" target="_self" />
            </div>
            <form onSubmit={registerUser}>
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
