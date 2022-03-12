import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import pilates from "../../assets/pilates.png";
import Checkbox from "@mui/material/Checkbox";
import "./SelectedActivity.css";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function SelectedActivity() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				<Grid item xs={6} md={8}>
					<Item>
						<img className="selected_img" src={pilates} />
					</Item>
				</Grid>
				<Grid item xs={6} md={4}>
					<Item>Description</Item>
					
				</Grid>
				<Grid item xs={6} md={12}>
					<Item>
						<Checkbox {...label} defaultChecked />
						Practiced Excercise?
					</Item>
				</Grid>
			</Grid>
		</Box>
	);
}
