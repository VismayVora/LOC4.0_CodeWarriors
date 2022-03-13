import React, { useEffect } from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@mui/material/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import AddCircle from "@mui/icons-material/AddCircle";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Modal from "@mui/material/Modal";
import yoga from "../../assets/meditation.png";
// import Popup from "reactjs-popup";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./events.css";
import { TextField } from "@mui/material";
<<<<<<< HEAD
import NavBar from "../NavBar/NavBar";
=======
import { integerPropType } from "@mui/utils";
>>>>>>> 73dfd167e365ccc1454f84ccddf15e8a5a729dda

const useStyles = makeStyles({
	root: {
		maxWidth: 400,
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});
const Input = styled("input")({
	display: "none",
});
const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

export default function OutlinedCard() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const [data, setData] = useState();
	const [num, setNum] = useState();
	const classes = useStyles();
	const navigate = useNavigate();
	const bull = <span className={classes.bullet}>•</span>;
	const arr = [1];
<<<<<<< HEAD
	const handleChange = () => {
		const formData = new FormData();
		const token = localStorage.getItem("token");
		const eventid = localStorage.getItem("event_id");
		formData.append("members", num);
		formData.append("tokenNo", token);
		formData.append("eventId", eventid);
		fetch(
			"https://6de4-2402-3a80-655-7e4a-7175-4a44-6a34-a0ca.ngrok.io/join_event/",
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
=======
	
	const handleChange=()=>{
		const formData=new FormData()
		
		const token = localStorage.getItem('token');
		const eventIId = sessionStorage.getItem('event_id');
		
		
		formData.append("members",1)
		formData.append("tokenNo",token)
		formData.append("eventId",eventIId)
		fetch("https://6de4-2402-3a80-655-7e4a-7175-4a44-6a34-a0ca.ngrok.io/join_event/",{
		headers: {
			Authorization: "Token 226eb2ed7afd3117ff943994158d9645eac05dbe",
		},
            method:'POST',
            body:formData,
        }).then(res=>res.json().then(json=>console.log(json)))
        .catch(err=>console.log(err))
	}
>>>>>>> 73dfd167e365ccc1454f84ccddf15e8a5a729dda

	useEffect(() => {
		fetch(
			"https://6de4-2402-3a80-655-7e4a-7175-4a44-6a34-a0ca.ngrok.io/Event/",
			{
				headers: {
					Authorization: "Token 226eb2ed7afd3117ff943994158d9645eac05dbe",
				},
			}
		)
			.then((res) => res.json())
			// .then((json) => setData(json));
			.then((res) => setData(res));
	}, []);

	return (
		<><div
    className="dashboard"
    style={{ backgroundColor: "linear-gradient(rgba(20, 0, 10, 0.5), transparent)" , justifyContent:"left", textAlign:"left"}}
  >
    <NavBar sx={{backgroundColor: "linear-gradient(rgba(20, 0, 10, 0.5), transparent)"}} />
    <Grid>
            <h1> Events</h1>
        </Grid>
        </div>
			<Grid
				container
				sx={{ background: "linear-gradient(rgba(1,0,1,0.5),transparent)" }}
			>
				<Stack direction="row" alignItems="center" spacing={1}>
					<label htmlFor="icon-button-file">
						<IconButton
							className="addbutton"
							color="inherit"
							// aria-label="upload picture"
							// component="span"
							onClick={() => navigate("/newevent")}
						>
							<AddCircle />
							Create Event
						</IconButton>
					</label>
				</Stack>
				<Grid container spacing={3}>
					{data ? (
						data.map((item) => {
							return (
								<Grid item xs={6}>
									<Item>
										<div className="the-Container">
											<div className="the-Card">
												<h2>{item.name}</h2>
												<div className="the-Front">
													<img className="front_img" src={item.image} />
												</div>
											</div>
											<div className="front_right">
												<div className="info">
													<h5>Date: {item.date}</h5>
													<h5>Time: {item.time}</h5>
													<h5>Location: {item.location}</h5>
													<h5>Availability: {item.participant_limit}</h5>
													<h5>Organizer: {item.organiser}</h5>
												</div>
<<<<<<< HEAD

												<Button
													className="add_button"
													outlined
													onClick={() => {
														sessionStorage.setItem(
															"item_id",
															JSON.stringify(item.id)
														);
													}}
												>
													Join Now
												</Button>

												{/* </div> */}
											</div>
=======
      
											<Button 
											id={item.id}
											onClick= {() => {
	handleChange()
	sessionStorage.setItem(
		"event_id",
		JSON.stringify(item.id)
	);
}}>Join</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    {/* </div> */}
>>>>>>> 73dfd167e365ccc1454f84ccddf15e8a5a729dda
										</div>
									</Item>
								</Grid>
							);
						})
					) : (
						<p>Loadnih</p>
					)}
				</Grid>
			</Grid>
		</>
	);
}
