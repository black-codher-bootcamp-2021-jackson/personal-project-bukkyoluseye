import React from 'react'
import InputField from '../InputField'
import TextLink from '../Buttons/TextLink'

const LogIn = () => {
    return (
        <>
            <div className="have-you">
                <h1>Login</h1>
                <p>Already have an account? </p>
                <TextLink text="Log in" href="/login" />
            </div>
            <form method='post'>
                <InputField label="Email Address*" type="email" />
                <InputField label="Password*" variant="password" />
            </form>
        </>
    )
}

export default LogIn
