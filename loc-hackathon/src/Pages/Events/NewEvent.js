import { Button, Card, CardContent, Grid } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import "./NewEvent.css";

function NewEvent() {
	const navigate = useNavigate()
	const [name,setName]=useState()
	const [date,setDate]=useState()
	const [time,setTime]=useState()
	const [organizer,setOrganizer]=useState()
	const [number,setNumber]=useState()
	const [location,setLocation]=useState()
	const [err,setErr]=useState()
	

	const handleClick=()=>{
		const formData=new FormData()
		const token = localStorage.getItem('token');
      formData.append('date',date)
      formData.append('time',time)
	  formData.append('name',name)
	  formData.append('participant_limit',number)
	  formData.append('location',location)
	  formData.append('token',token)
      fetch("http://dc5a-2401-4900-198b-aafb-f1ed-32ad-6425-c523.ngrok.io/create_event/",{
		headers: {
			Authorization: "Token 226eb2ed7afd3117ff943994158d9645eac05dbe",
		},
            method:'POST',
            body:formData,
        }).then(res=>res.json().then(json=>console.log(json)))
        .catch(err=>console.log(err))
	}

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
										onChange={(e)=>setName(e.target.value)}
									/>
								</Grid>
								<Grid item style={{ width: "100%" }}>
									<TextField
										value={date}
										id="standard-textarea"
										label="Date"
										variant="standard"
										onChange={(e)=>{setDate(e.target.value)}}
									/>
								</Grid>
								<Grid item style={{ width: "100%" }}>
									<TextField
										id="standard-textarea"
										label="Time"
										variant="standard"
										value={time}
										onChange={(e)=>setTime(e.target.value)}
									/>
								</Grid>
								<Grid item style={{ width: "100%" }}>
									<TextField
										id="standard-textarea"
										label="Organizer"
										variant="standard"
										value={organizer}
										onChange={(e)=>setOrganizer(e.target.value)}
									/>
								</Grid>
                                <Grid item style={{ width: "100%" }}>
									<TextField
										id="standard-textarea"
										label="Number of users to be registered"
										variant="standard"
										value={number}
										onChange={(e)=>setNumber(e.target.value)}
									/>
								</Grid>
								<Grid item style={{ width: "100%" }}>
									<TextField
										id="standard-textarea"
										label="Locatiion"
										variant="standard"
										value={location}
										onChange={(e)=>setLocation(e.target.value)}
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
