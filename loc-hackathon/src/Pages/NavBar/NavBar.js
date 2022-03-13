import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
	return (
        <>
		<div className="nav-bar" sx={{backgroundColor:"grey"}}>
            {/* <div>MyFitnessPal */}
			<li>
				<Link to="/dashboard">Dashboard</Link>
			</li>
			<li>
				<Link to="/activities">Training</Link>
			</li>
			<li>
				<Link to="/event">Events</Link>
			</li>
            {/* </div> */}
		</div>
        </>
	);
};
export default NavBar;
