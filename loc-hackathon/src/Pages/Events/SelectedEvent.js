import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import pilates from "../../assets/pilates.png";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Input = styled("input")({
	display: "none",
});

export default function SelectedEvent() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				<Grid item xs={8} md={10}>
					<Item>
						<img className="selected_img" src={pilates} />
					</Item>
				</Grid>
				<Grid item xs={6} md={4}>
					<Item>Description</Item>
				</Grid>
				<Grid item xs={6} md={12}>hi</Grid>
			</Grid>
		</Box>
	);
}
