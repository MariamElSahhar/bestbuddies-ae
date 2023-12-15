import React, { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";

import '../../styles/navbar.css';
import LanguageToggle from '../LanguageToggle'
import Hamburger from './Hamburger';
import WideNavbar from './WideNavbar';



const pageLinks = [
    {name: "Home", address: "/",  menu: false},
    {name: "About", address: "/about",  menu: false},
    {name: "Programs", address: "/programs", menu: true, subPages:
        [
            {name: "Employment", address: "/employment"},
            {name: "Friendship", address: "/friendship"},
            {name: "Leadership", address: "/leadership"}
        ]
    },
    {name: "Get Involved", address: "/get-involved", menu: false, subPages:
        [
            {name: "Start a Chapter", address: "/start-a-chapter"},
            {name: "Become a Buddy", address: "/become-a-buddy"},
            {name: "Become a Mentor", address: "/become-a-mentor"},
            {name: "Become an Employer", address: "/become-an-employer"},
            {name: "Attend an Event", address: "/events"},
        ]
    },
    // {name: "Media", address: "/media", menu: false},
    {name: "Contact Us", address: "/contact-us", menu: false},
    // {name: "Donate", address: "/donate", menu: false},
]

function Navbar () {
    return (
        <nav>
            <div className="navbar-top">
                {/* <LanguageToggle /> */}
                <button><a href="https://www.bestbuddies.org/"><i className="fa-solid fa-globe"></i></a></button>
            </div>
            <div className="navbar-bottom">
                <Link to="/"><img src="/assets/logos/BBUAE-logo-color-en.png" alt="best buddies english logo" className="logo-ill logo-top"></img></Link>
                {/* <img src="../images/intl-txt-logo-En.png" alt="best buddies text logo" className="logo-txt hide logo-top"></img> */}
                <WideNavbar pages={pageLinks}/>
                <Hamburger pages={pageLinks}/>
            </div>
        </nav>
    );
}

export default Navbar;