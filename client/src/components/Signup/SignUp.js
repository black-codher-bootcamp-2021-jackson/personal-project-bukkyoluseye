import React from 'react';
import InputField from '../InputField';
import TextLink from '../Buttons/TextLink';

const SignUp = () => {
    return (
        <>
            <div className="have-you">
                <h1>Sign Up</h1>
                <p>Already have an account? </p>
                <TextLink text="Log in" href="/login" target="_self" />
            </div>
            <form method="post">
                <InputField label="First Name*" type="text" />
                <InputField label="Surname*" type="text" />
                <InputField label="Email Address*" type="email" />
                <InputField label="Password*" variant="password" />
            </form>
        </>
    );
};

export default SignUp;
