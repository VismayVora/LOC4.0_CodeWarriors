import React, { useState } from "react";
import "./Activities.css";
import sport from "../../assets/sports.png";
import meditation from "../../assets/meditation.png";
import pilates from "../../assets/pilates.png";
import indoor_bike from "../../assets/indoor_bike.png";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Button } from "@material-ui/core";

export default function Activities() {
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary,
	}));

	return (
		<>
			<Grid container spacing={3}>
				<Grid item xs={3}>
					<Item>
						<div className="theContainer">
							<div className="theCard">
								<div className="theFront">
									Meditation
									<img className="front_img" src={meditation} />
								</div>
								<div className="theBack">
									Many studies have been conducted to look at how meditation may
									be helpful for a variety of conditions, such as high blood
									pressure, certain psychological disorders, and pain. A number
									of studies also have helped researchers learn how meditation
									might work and how it affects the brain.
								</div>
							</div>
						</div>
					</Item>
				</Grid>
				<Grid item xs={3}>
					<Item>
						<div className="theContainer">
							<div className="theCard">
								<div className="theFront">
									Pilates
									<img className="front_img" src={pilates} />
								</div>
								<div className="theBack">
									<div>
										Many studies have been conducted to look at how meditation
										may be helpful for a variety of conditions, such as high
										blood pressure, certain psychological disorders, and pain. A
										number of studies also have helped researchers learn how
										meditation might work and how it affects the brain.
									</div>
									<Button sx={{cursor:"pointer"}}>
										Start Activity
									</Button>
								</div>
							</div>
						</div>
					</Item>
				</Grid>
				<Grid item xs={3}>
					<Item>
						<div className="theContainer">
							<div className="theCard">
								<div className="theFront">
									Spinning
									<img className="front_img" src={sport} />
								</div>
								<div className="theBack">Back of Card</div>
							</div>
						</div>
					</Item>
				</Grid>
				<Grid item xs={3}>
					<Item>
						<div className="theContainer">
							<div className="theCard">
								<div className="theFront">
									Indoor Bike
									<img className="front_img" src={indoor_bike} />
								</div>
								<div className="theBack">Back of Card</div>
							</div>
						</div>
					</Item>
				</Grid>
			</Grid>

			{/* <div className="main_container">
				<div className="theContainer">
					<div className="theCard">
						<div className="theFront">Front of Card</div>
						<div className="theBack">Back of Card</div>
					</div>
				</div>
				<div className="theContainer">
					<div className="theCard">
						<div className="theFront">Front of Card</div>
						<div className="theBack">Back of Card</div>
					</div>
				</div>
			</div> */}
		</>
	);
}
