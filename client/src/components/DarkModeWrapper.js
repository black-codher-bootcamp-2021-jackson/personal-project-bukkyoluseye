import React, { useState } from 'react'
import DarkModeButton from './DarkModeButton'

// import ios-moon from '.../assets/ios-moon.svg';

const DarkModeWrapper = ({ children }) => {
    // Checks if the client has a preferred colour scheme of dark
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'
    
    // Set theme based on preference
    const [theme, setTheme] = useState(preferredTheme)


    // TODO: Check value of current local storage and doesn't match or if there is no local storage set and the window match media is set and doesn't match then we set it. if local storage not set, we check the Window. localstorage.getItem || window.matchmedia != theme, then set theme

    // if the value saved in storage doesn't match the current theme
    const switchTheme = (e) => {
        e.preventDefault()
        console.log(theme)
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }
    console.log(theme)
    return (
        <div className={theme}>
            {/* <DarkModeButton onClick={switchTheme} theme={theme} /> */}
            {/* <SideNavBar onClick={switchTheme} />
            <BottomNavBar />  */}
            {console.log(theme)}
            {children}
        </div>
    )
}

export default DarkModeWrapper
