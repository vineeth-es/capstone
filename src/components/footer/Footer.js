import React from "react";

import "./Footer.css";
import logo from '../../assets/Logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <section className="footer-container">
                <div className="res-info">
                    <img src={logo} alt='logo' />
                    <p>We are a family owned Mediterranean restaurant,focused on traditional recipes servred with modern twist</p>
                </div>
                <div className="footer-links">
                    <h4> Important links</h4>
                    <ul className="footer-ul">
                        <li className="footer-li"><Link className='foo-link' to="/">Home</Link></li>
                        <li className="footer-li"><Link className='foo-link' to="/">About</Link></li>
                        <li className="footer-li"><Link className='foo-link' to="/">Menu</Link></li>
                        <li className="footer-li"><Link className='foo-link' to="/">Booking</Link></li>
                        <li className="footer-li"><Link className='foo-link' to="/">Order online</Link></li>
                        <li className="footer-li"><Link className='foo-link' to="/">Login</Link></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h4> Contact Us</h4>
                    <ul className="footer-ul">
                        <li className="footerl">Phone: 123-456-7890</li>
                        <li className="footerl">Email: littlelemon@gmail.com </li>
                        <li className="footerl">Address: <br /> 123 avmiik, IL</li>
                    </ul>
                </div>
                <div className="social-media">
                    <h4> Follow Us</h4>
                    <ul className="footer-ul">
                        <li className="footer-li">facebook</li>
                        <li className="footer-li">Instagram</li>
                        <li className="footer-li">Twitter</li>
                    </ul>

                </div>
            </section>
        </footer>
    );
};

export default Footer;