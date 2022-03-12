import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import pilates from "../../assets/pilates.png";
import Checkbox from "@mui/material/Checkbox";
import "./SelectedActivity.css";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import Timer from "./Timer";

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

export default function SelectedActivity() {
	const [data,setData]=useState()
	useEffect(() => {
		const itemid = sessionStorage.getItem('item_id');
		console.log(itemid)
		fetch("http://dc5a-2401-4900-198b-aafb-f1ed-32ad-6425-c523.ngrok.io/Activity/"+itemid+"/", {
			headers: {
				Authorization: "Token 226eb2ed7afd3117ff943994158d9645eac05dbe",
			},
		})
			.then((res) => res.json())
			.then((json) => setData(json));

	}, []);
	return (
		<div>
			{data?
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				<Grid item xs={6} md={8}>
					<Item>
						<img className="selected_img" src={data.image} />
					</Item>
				</Grid>
				<Grid item xs={6} md={4}>
				<Item> <h1>Description</h1> </Item>
					<Item>{data.description}</Item>
					
				</Grid>
				<Grid item xs={6} md={12}>
					<Item>
					<h1> <Checkbox {...label} defaultChecked /> {data.name}</h1>
						
						
					</Item>
				</Grid>
			</Grid>
		</Box>:<p>Loading....</p>}
		</div>
	);
}
