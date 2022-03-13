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
// import Timer from "./Timer";
import VideoFetching from "../VideoFetching/VideoFetching";
import NavBar from "../NavBar/NavBar"
import Timers from "./Timer";

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
	const [data, setData] = useState();
	useEffect(() => {
		const itemid = sessionStorage.getItem("item_id");
		console.log(itemid);
		fetch(
			"https://6de4-2402-3a80-655-7e4a-7175-4a44-6a34-a0ca.ngrok.io/Activity/" +
				itemid +
				"/",
			{
				headers: {
					Authorization: "Token 226eb2ed7afd3117ff943994158d9645eac05dbe",
				},
			}
		)
			.then((res) => res.json())
			.then((json) => setData(json));
	}, []);
	return (
        <>
		<div
    className="dashboard"
    style={{ backgroundColor: "linear-gradient(rgba(20, 0, 10, 0.5), transparent)" , justifyContent:"left", textAlign:"left"}}
  >
    <NavBar sx={{backgroundColor: "linear-gradient(rgba(20, 0, 10, 0.5), transparent)"}} />
   </div>
			{data ? (
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={2}>
						<Grid item xs={6} md={7}>
							<Item>
								{/* <img className="selected_img" src={data.image} /> */}
								<VideoFetching
									url={data.video_link}
									sx={{ justifyContent: "center" }}
								/>
							</Item>
						</Grid>
						<Grid item xs={6} md={5}>
							<Item>
								{" "}
								<h1>Description</h1>{" "}
							</Item>
							<Item>{data.description}</Item>
							<Item>
								<Timers />
							</Item>
						</Grid>
						<Grid item xs={6} md={12}>
							<Item>
								<h1>
									{" "}
									<Checkbox {...label} defaultChecked /> {data.name}
								</h1>
							</Item>
						</Grid>
					</Grid>
				</Box>
			) : (
				<p>Loading....</p>
			)}
		
        </>
	);
}
