import React from 'react';
import { Outlet, Link } from "react-router-dom";
import '../styles/footer.css';
import Newsletter from './Newsletter'

function Footer () {
    return (
        <footer>
            <div className="footer-top">
                <div className="info col">
                    <img src="/assets/logos/BBUAE-logo-color-en.png" alt="best buddies english logo" className="logo-ill"></img>
                    <h3>Best Buddies UAE</h3>
                    <p>Yas Creative Hub</p>
                    <p>Yas Island</p>
                    <p>Abu Dhabi, UAE</p>
                </div>
                <div className="quicklinks col">
                    <h3>Quick Links</h3>
                    <ul className="quicklinks-links">
                        <li><Link to="/faq">Frequently Asked Questions</Link></li>
                        <li><Link to="/programs">Join a Program</Link></li>
                        <li><Link to="/donate">Make a Donation</Link></li>
                        <li><a href="https://www.bestbuddies.org/">International Website</a></li>
                    </ul>
                </div>
                <div className="socials col">
                    <h3>Contact Us</h3>
                    <ul className="social-links">
                        <li><i className="fa-solid fa-phone"></i> +971 2 444 1267</li>
                        <li><i className="fa-regular fa-envelope"></i> hello@bestbuddies.ae</li>
                        <li><i className="fa-brands fa-instagram"></i> Instagram</li>
                        <li><i className="fa-brands fa-facebook-f"></i> Facebook</li>
                    </ul>
                    <Newsletter />
                </div>
            </div>
            <div className="copyright">
                <p>[© Copyright Statement placeholder]</p>
            </div>
        </footer>
    );
}

export default Footer;