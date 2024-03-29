import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function WideNavbar({pages}) {
  return (
    <ul className='navbar-wide'>
        {
        pages.map((page) => (
            <li className="navbar-li" key={page.address} id={page.address}>
                {
                    page.menu ?
                    (
                        <div className='dropdown-wrapper'>
                            <Link to={page.address}> {page.name} </Link>
                            <ul className="dropdown-menu">
                                {page.subPages.map((subPage) => (
                                    <li className="dropdown-item" key={subPage.address} id={subPage.address}>
                                        <Link to={`${page.address}${subPage.address}`}>{subPage.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                    :
                    ( <Link to={page.address}> {page.name} </Link> )
                }
            </li>
        ))
        }
    </ul>
  )
}
