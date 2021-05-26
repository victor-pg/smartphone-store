import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme } from '../Themes';

import './Navbar.scss'

const Navbar = () => {

    const [theme, setTheme] = useState('light');

    const changeTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
        localStorage.setItem('theme',JSON.stringify(theme));
    }

    

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <nav >
                <div className="nav-logo">
                    <Link to="/">
                        <img src={process.env.PUBLIC_URL + '/img/logo.svg'} alt="logo" />
                    </Link>
                </div>
                <div className="container nav-content">
                    <ul className="nav-items">
                        <li><Link to="/">New <span className="material-icons star-icon">
                            star
                    </span></Link></li>
                        <li><Link to="/smartphones">Smartphones</Link></li>
                        <li><Link to="/">Tablets</Link></li>
                        <li><Link to="/">About Us</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>
                    <div className="nav-icons">
                        <Link to="/" className="reset-this"><span className="material-icons-outlined">search</span></Link>
                        <Link to="/cart" className="reset-this"><span className="material-icons-outlined">shopping_bag</span></Link>
                        <div className="dark-mode-icon" onClick={changeTheme}><span className="material-icons-outlined">mode_night</span></div>
                    </div>
                </div>
            </nav>
        </ThemeProvider>
    );
}

export default Navbar;