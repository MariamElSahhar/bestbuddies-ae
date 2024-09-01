import React from "react";
import { NavLink } from "react-router-dom";

export default function WideNavbar({ pages }) {
	return (
		<ul className="navbar-wide">
			{pages.map((page) => (
				<li className="navbar-li" key={page.address} id={page.address}>
					{page.menu ? (
						<div className="dropdown-wrapper">
							<NavLink to={page.address} activeClassName="active">
								{" "}
								{page.name}{" "}
							</NavLink>
							<ul className="dropdown-menu">
								{page.subPages.map((subPage) => (
									<li
										className="dropdown-item"
										key={subPage.address}
										id={subPage.address}
									>
										<NavLink
											to={`${subPage.address}`}
											activeClassName="active"
										>
											{subPage.name}
										</NavLink>
									</li>
								))}
							</ul>
						</div>
					) : (
						<NavLink to={page.address} activeClassName="active">
							{" "}
							{page.name}{" "}
						</NavLink>
					)}
				</li>
			))}
		</ul>
	);
}
