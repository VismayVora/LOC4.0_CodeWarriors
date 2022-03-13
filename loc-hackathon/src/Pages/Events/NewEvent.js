import { Button, Card, CardContent, Grid } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import "./NewEvent.css";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

function NewEvent() {
	const navigate = useNavigate();
	const [name, setName] = useState();
	const [date, setDate] = useState();
	const [time, setTime] = useState();
	const [organizer, setOrganizer] = useState();
	const [number, setNumber] = useState();
	const [location, setLocation] = useState();

	const Input = styled("input")({
		display: "none",
	});

	const [err, setErr] = useState();

	const handleClick = () => {
		const formData = new FormData();
		const token = localStorage.getItem("token");
		formData.append("date", date);
		formData.append("time", time);
		formData.append("name", name);
		formData.append("participant_limit", number);
		formData.append("location", location);
		formData.append("token", token);
		fetch(
			"https://6de4-2402-3a80-655-7e4a-7175-4a44-6a34-a0ca.ngrok.io/create_event/",
			{
				headers: {
					Authorization: "Token 226eb2ed7afd3117ff943994158d9645eac05dbe",
				},
				method: "POST",
				body: formData,
			}
		)
			.then((res) => res.json().then((json) => console.log(json)))
			.catch((err) => console.log(err));
	};

	return (
		<>
			<div className="main_grid">
				<Grid
					container
					style={{
						backgroundColor: "#6464CA",
					}}
				>
					<Grid
						container
						style={{
							backgroundColor: "#6464CA",
							width: "100%",
							height: "100%",
							// display: "flex",
							justifyContent: "center",
							alignItems: "center",
							// position: "relative",
						}}
					>
						<Grid
							item
							style={{
								backgroundColor: "white",
								// padding: "50px",
								marginTop: "10px",
								marginBottom: "105px",
								borderRadius: "7px",
							}}
						>
							<p
								style={{
									textAlign: "center",
									fontSize: "1.89rem",
									// color: "#1F2128",
								}}
							>
								<bold>
									<center>Event Details</center>
								</bold>
								<hr></hr>
							</p>
							<Grid
								container
								sx={{
									display: "flex",

									// justifyContent: "center",
									// alignItems: "center",
								}}
							>
								<Grid item style={{ width: "100%" }}>
									<TextField
										value={name}
										id="standard-textarea"
										label="Event Name"
										variant="standard"
										onChange={(e) => setName(e.target.value)}
									/>
								</Grid>
								<Grid item style={{ width: "100%" }}>
									<TextField
										value={date}
										id="standard-textarea"
										label="Date"
										variant="standard"
										onChange={(e) => {
											setDate(e.target.value);
										}}
									/>
								</Grid>
								<Grid item style={{ width: "100%" }}>
									<TextField
										id="standard-textarea"
										label="Time"
										variant="standard"
										value={time}
										onChange={(e) => setTime(e.target.value)}
									/>
								</Grid>
								<Grid item style={{ width: "100%" }}>
									<TextField
										id="standard-textarea"
										label="Organizer"
										variant="standard"
										value={organizer}
										onChange={(e) => setOrganizer(e.target.value)}
									/>
								</Grid>
								<Grid item style={{ width: "100%" }}>
									<TextField
										id="standard-textarea"
										label="Number of users to be registered"
										variant="standard"
										value={number}
										onChange={(e) => setNumber(e.target.value)}
									/>
								</Grid>
								<Grid item style={{ width: "100%" }}>
									<TextField
										id="standard-textarea"
										label="Location"
										variant="standard"
										value={location}
										onChange={(e) => setLocation(e.target.value)}
									/>
								</Grid>
								{/* <Grid>
                                <Item>
                    <Stack direction="row" alignItems="center" spacing={2}>
									<label htmlFor="contained-button-file">
										<Input
											accept="image/*"
											id="contained-button-file"
											multiple
											type="file"
										/>
										<Button variant="contained" component="span">
											Upload
										</Button>
									</label>
									<label htmlFor="icon-button-file">
										<Input accept="image/*" id="icon-button-file" type="file" />
										<IconButton
											color="primary"
											aria-label="upload picture"
											component="span"
										>
											<PhotoCamera />
										</IconButton>
									</label>
								</Stack>
                    </Item>
                                </Grid> */}
							</Grid>

							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									columnGap: "40px",
									marginBottom: "80px",
								}}
							></div>

							<Grid
								item
								style={{
									width: "100%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Button
									style={{
										width: "30%",
										height: "40px",
										border: "2px solid #8080FF",
										color: "#8080FF",
										marginTop: "1%",
										marginBottom: "2%",
										background: "rgba(128, 128, 255, 0.2)",
										fontWeight: "600",
										fontSize: "1.1em",
									}}
									onClick={handleClick}
								>
									Submit
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</>
	);
}

export default NewEvent;
