import { Grid } from "@material-ui/core";
import React from "react";
import SpacingGrid from "./layout";

import Charts from "./chart";
import CheckList from "./list";
import NavBar from "../NavBar/NavBar";

function Dashboard() {
	return (
		<div
			className="dashboard"
			style={{ backgroundColor: "linear-gradient(rgba(20, 0, 10, 0.5), transparent)" , justifyContent:"left", textAlign:"left"}}
		>
			<NavBar sx={{backgroundColor: "linear-gradient(rgba(20, 0, 10, 0.5), transparent)"}} />
			<Grid>
				<h1 className="dash" > Dashboard</h1>
			</Grid>
			<Grid>
				<SpacingGrid />
			</Grid>
		</div>
	);
}

export default Dashboard;
