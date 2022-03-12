import React, { useEffect, useState } from "react";
import "./Activities.css";
import { useNavigate } from "react-router-dom";
import sport from "../../assets/sports.png";
import meditation from "../../assets/meditation.png";
import pilates from "../../assets/pilates.png";
import indoor_bike from "../../assets/indoor_bike.png";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import SelectedActivity from "./SelectedActivity";

export default function Activities() {
	const [data, setData] = useState();
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary,
	}));
	useEffect(() => {
		fetch("http://9eae-106-209-235-77.ngrok.io/Activity/", {
			headers: {
				Authorization: "Token 226eb2ed7afd3117ff943994158d9645eac05dbe",
			},
		})
			.then((res) => res.json())
			.then((json) => setData(json));
	}, []);

	const navigate = useNavigate();

	return (
		<>
			<Grid container spacing={3}>
				{data ? (
					data.map((item) => {
						return (
							<Grid item xs={3}>
								<Item>
									<div className="theContainer">
										<div className="theCard">
											<div className="theFront">
												{item.name}
												<img className="front_img" src={item.image} />
											</div>
											<div className="theBack">
												{item.description}
												<Button
													sx={{ cursor: "pointer" }}
													onClick={() =>{ sessionStorage.setItem('item_id', JSON.stringify(item.id));
														navigate("/selected_activity")}}
												>
													Start Activity
												</Button>
											</div>
										</div>
									</div>
								</Item>
							</Grid>
						);
					})
				) : (
					<p></p>
				)}
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
