import React, { useState }from 'react';
import "../App.css";

// import ios-moon from '.../assets/ios-moon.svg';

const DarkModeWrapper = ({children}) => {
    // Renaming the document's body for ease
    // const body = document.body;
    const preferredTheme= window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
    const [theme, setTheme ] = useState(preferredTheme);
    
    // let theme;

    // Checks if the client has a preferred colour scheme of dark
    // Check value of current local storage and doesn't match or if there is no local storage set and the window match media is set and doesn't match then we set it. if local storage not set, we check the Window. localstorage.getItem || window.matchmedia != theme, then set theme


    // if the value saved in storage doesn't match the current theme
    const switchTheme = (e) => {
        e.preventDefault();
        if (theme === 'dark'){
            setTheme("light");
        }

        else {
            setTheme("dark");
        }
    };

    return (
        <div className={theme}>
            <button
                id="darkMode"
                onClick = {switchTheme}
            >
                {/* Button would be moved into the side navBar - take props for onclick = switchTheme */}
            {theme === "dark"? (<svg className = "sun" alt="Sun" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" version="1.1" preserveAspectRatio="xMidYMid meet"><path d="M256 387c-8.5 0-15.4 6.9-15.4 15.4v46.2c0 8.5 6.9 15.4 15.4 15.4s15.4-6.9 15.4-15.4v-46.2c0-8.5-6.9-15.4-15.4-15.4zM256 48c-8.5 0-15.4 6.9-15.4 15.4v46.2c0 8.5 6.9 15.4 15.4 15.4s15.4-6.9 15.4-15.4V63.4c0-8.5-6.9-15.4-15.4-15.4zM125 256c0-8.5-6.9-15.4-15.4-15.4H63.4c-8.5 0-15.4 6.9-15.4 15.4s6.9 15.4 15.4 15.4h46.2c8.5 0 15.4-6.9 15.4-15.4zM448.6 240.6h-46.2c-8.5 0-15.4 6.9-15.4 15.4s6.9 15.4 15.4 15.4h46.2c8.5 0 15.4-6.9 15.4-15.4s-6.9-15.4-15.4-15.4zM152.5 344.1c-4.1 0-8 1.6-10.9 4.5l-32.7 32.7c-2.9 2.9-4.5 6.8-4.5 10.9s1.6 8 4.5 10.9c2.9 2.9 6.8 4.5 10.9 4.5 4.1 0 8-1.6 10.9-4.5l32.7-32.7c6-6 6-15.8 0-21.8-2.9-2.9-6.8-4.5-10.9-4.5zM359.5 167.9c4.1 0 8-1.6 10.9-4.5l32.7-32.7c2.9-2.9 4.5-6.8 4.5-10.9s-1.6-8-4.5-10.9c-2.9-2.9-6.8-4.5-10.9-4.5-4.1 0-8 1.6-10.9 4.5l-32.7 32.7c-2.9 2.9-4.5 6.8-4.5 10.9s1.6 8 4.5 10.9c2.9 2.9 6.8 4.5 10.9 4.5zM130.7 108.9c-2.9-2.9-6.8-4.5-10.9-4.5-4.1 0-8 1.6-10.9 4.5-2.9 2.9-4.5 6.8-4.5 10.9 0 4.1 1.6 8 4.5 10.9l32.7 32.7c2.9 2.9 6.8 4.5 10.9 4.5 4.1 0 8-1.6 10.9-4.5 2.9-2.9 4.5-6.8 4.5-10.9s-1.6-8-4.5-10.9l-32.7-32.7zM370.4 348.6c-2.9-2.9-6.8-4.5-10.9-4.5-4.1 0-8 1.6-10.9 4.5-6 6-6 15.8 0 21.8l32.7 32.7c2.9 2.9 6.8 4.5 10.9 4.5 4.1 0 8-1.6 10.9-4.5 2.9-2.9 4.5-6.8 4.5-10.9s-1.6-8-4.5-10.9l-32.7-32.7zM256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96z"/></svg>)
            :
            (<svg className="moon" alt="Moon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" version="1.1" preserveAspectRatio="xMidYMid meet"><path d="M401.4 354.2c-2.9.1-5.8.2-8.7.2-47.9 0-93-18.9-126.8-53.4-33.9-34.4-52.5-80.1-52.5-128.8 0-27.7 6.1-54.5 17.5-78.7 3.1-6.6 9.3-16.6 13.6-23.4 1.9-2.9-.5-6.7-3.9-6.1-6 .9-15.2 2.9-27.7 6.8C135.1 95.5 80 168.7 80 255c0 106.6 85.1 193 190.1 193 58 0 110-26.4 144.9-68.1 6-7.2 11.5-13.8 16.4-21.8 1.8-3-.7-6.7-4.1-6.1-8.5 1.7-17.1 1.8-25.9 2.2z"/></svg>)}
            </button>
            {/* <SideNavBar onClick={switchTheme} />
            <BottomNavBar />  */}
            {children}
        </div>
    )
}

export default DarkModeWrapper;