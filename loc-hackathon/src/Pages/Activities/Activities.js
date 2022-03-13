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
import NavBar from "../NavBar/NavBar";

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
		fetch(
			"https://6de4-2402-3a80-655-7e4a-7175-4a44-6a34-a0ca.ngrok.io/Activity",
			{
				headers: {
					Authorization: "Token 226eb2ed7afd3117ff943994158d9645eac05dbe",
				},
			}
		)
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				setData(json);
			});
	}, []);

	const navigate = useNavigate();

	return (
		<> <div
        className="dashboard"
        style={{ backgroundColor: "linear-gradient(rgba(20, 0, 10, 0.5), transparent)" , justifyContent:"left", textAlign:"left"}}
      >
        <NavBar sx={{backgroundColor: "linear-gradient(rgba(20, 0, 10, 0.5), transparent)"}} />
        <Grid>
            <h1> Training</h1>
        </Grid>
        </div>
			<Grid
				container
				spacing={3}
				sx={{ background: "linear-gradient(rgba(20,0,0,0.5),transparent)" }}
			>
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
													onClick={() => {
														navigate("/selected_activity");
														sessionStorage.setItem(
															"item_id",
															JSON.stringify(item.id)
														);
													}}
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
		</>
	);
}
