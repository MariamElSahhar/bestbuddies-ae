import React, { useState } from "react";
import { useClickAway } from "react-use";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

import "../../styles/navbar.css";

const Hamburger = ({ pages }) => {
	const [showMenu, setMenu] = useState(false);
	const ref = useRef(null);
	useClickAway(ref, () => setMenu(false));

	const toggleMenu = () => {
		setMenu(!showMenu);
	};

	return (
		<div id="hamburger" ref={ref}>
			<i
				className="fa-solid fa-bars"
				id="hamburger-icon"
				onClick={toggleMenu}
			></i>
			<ul id="hamburger-menu" className={showMenu ? "" : "hide"}>
				{pages.map((page) =>
					page.menu ? (
						<Dropdown page={page} key={page.address} />
					) : (
						<li
							className="navbar-li"
							key={page.address}
							id={page.address}
						>
							<Link to={page.address}>{page.name}</Link>
						</li>
					)
				)}
			</ul>
		</div>
	);
};

export default Hamburger;
