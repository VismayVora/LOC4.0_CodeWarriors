import { Button, Card, CardContent, Grid } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import "./NewEvent.css";

function NewEvent() {
	const navigate = useNavigate();
	const [list, setList] = useState({
	});
	const [items, setItems] = useState([]);
	const [show, setShow] = useState(false);
	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setValue(e.target.value);
		setList({ ...list, [name]: value });
		console.log(list)
	};

	const [value, setValue] = useState([null, null]);

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
										id="standard-textarea"
										label="Event Name"
										variant="standard"
									/>
								</Grid>
								<Grid item style={{ width: "100%" }}>
									<TextField
										id="standard-textarea"
										label="Date"
										variant="standard"
									/>
								</Grid>
								<Grid item style={{ width: "100%" }}>
									<TextField
										id="standard-textarea"
										label="Time"
										variant="standard"
									/>
								</Grid>
								<Grid item style={{ width: "100%" }}>
									<TextField
										id="standard-textarea"
										label="Organizer"
										variant="standard"
									/>
								</Grid>
                                <Grid item style={{ width: "100%" }}>
									<TextField
										id="standard-textarea"
										label="Number of users to be registered"
										variant="standard"
									/>
								</Grid>
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
                                        marginBottom:"2%",
										background: "rgba(128, 128, 255, 0.2)",
										fontWeight: "600",
										fontSize: "1.1em",
									}}
									onClick={handleChange}
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
