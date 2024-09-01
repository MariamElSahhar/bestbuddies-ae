import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Dropdown({ page }) {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {setToggle(!toggle)};

    return (
        <React.Fragment>
            <li className="navbar-li" key={page.address} id={page.address}>
                <Link to={page.address}>{page.name}</Link>
                <button className="hamburger-dropdown-button" onClick={handleToggle}><i className={"fa-solid " + (toggle ? "fa-caret-up" : "fa-caret-down")}></i></button>
            </li>
            {
                toggle ?
                page.subPages.map((subPage) => (
                    <li className="dropdown-item subpage-li" key={subPage.address} id={subPage.address}>
                        <Link to={`${page.address}${subPage.address}`}>{subPage.name}</Link>
                    </li>
                ))
                : ''
            }
        </React.Fragment>
  )
}

export default Dropdown
