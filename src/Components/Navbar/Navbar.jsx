import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss'

const Navbar = () => {
    return (
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
                    <li><Link to="/contacts">Contact</Link></li>
                </ul>
                <div className="nav-icons">
                    <Link to="/" className="reset-this"><span className="material-icons-outlined">search</span></Link>
                    <Link to="/cart" className="reset-this"><span className="material-icons-outlined">shopping_bag</span></Link>
                    <div className="dark-mode-icon"><span className="material-icons-outlined">mode_night</span></div>
                </div>
            </div>
            <div className="overlay"></div>
        </nav>
    );
}

export default Navbar;