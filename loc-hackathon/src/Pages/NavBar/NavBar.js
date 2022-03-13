import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
	return (
		<div className="nav-bar">
			<li>
				<Link to="/dashboard">Dashboard</Link>
			</li>
			<li>
				<Link to="/activities">Activities</Link>
			</li>
			<li>
				<Link to="/event">Events</Link>
			</li>
		</div>
	);
};
export default NavBar;
