import React, { useState } from 'react';
import { useClickAway } from 'react-use';
import { useRef } from 'react';
import { Outlet, Link } from 'react-router-dom';

import '../styles/navbar.css';

const Hamburger = ({ pages }) => {
  const [showMenu, menuState] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => menuState(false));

  const toggleMenu = () => {
    menuState(!showMenu);
  };

  return (
    <div id="hamburger" ref={ref}>
      <i className="fa-solid fa-bars" id="hamburger-icon" onClick={toggleMenu}></i>
      <ul id="hamburger-menu" className={showMenu ? '' : 'hide'}>
        {pages.map((page) => (
          page.menu ? (
            <React.Fragment key={page.address}>
              <li className="navbar-li" key={page.address} id={page.address}>
                <Link to={page.address}>{page.name}</Link>
                <button class="hamburger-dropdown-button"><i class="fa-solid fa-caret-down"></i></button>
              </li>
              {page.subPages.map((subPage) => (
                <li className="dropdown-item subpage-li" key={subPage.address} id={subPage.address}>
                  <Link to={subPage.address}>{subPage.name}</Link>
                </li>
              ))}
            </React.Fragment>
          ) : (
            <li className="navbar-li" key={page.address} id={page.address}>
              <Link to={page.address}>{page.name}</Link>
            </li>
          )
        ))}
      </ul>
    </div>
  );
};

export default Hamburger;
