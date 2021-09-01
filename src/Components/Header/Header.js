import React from 'react';
import Navbar from '../Navbar/Navbar'
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <div className="welcome-section mt-5 text-center">
                <h1 className=" mb-3">Arafat Hossain</h1>
                <p>I am a Professional Web Developer</p>
                <div className="social-links">
                    <ul>
                        <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;