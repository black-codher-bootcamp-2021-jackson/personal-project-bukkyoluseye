import React from 'react'
import InputField from './InputField'

const SignUp = () => {
    return (
        <>
            <h1>Sign Up</h1>
            <p>
                Already have an account? <a href="/login">Log in</a>
            </p>
            <form>
                <InputField label="First Name*" type="text" />
                <InputField label="Surname*" type="text" />
                <InputField label="Email Address*" type="email" />
                <InputField label="Password*" type="password" />
            </form>
        </>
    )
}

export default SignUp
