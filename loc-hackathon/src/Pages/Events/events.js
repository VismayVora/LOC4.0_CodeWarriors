
import React,{ useEffect } from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import AddCircle from "@mui/icons-material/AddCircle";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import yoga from "../../assets/meditation.png"

const useStyles = makeStyles({
	root: {
		maxWidth: 200,
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
    const [data,setData]=useState()
	const classes = useStyles();
  const navigate = useNavigate();
	const bull = <span className={classes.bullet}>•</span>;
	const arr = [1];

    useEffect(() => {
        fetch("http://dc5a-2401-4900-198b-aafb-f1ed-32ad-6425-c523.ngrok.io/Event/", {
            headers: {
                Authorization: "Token 226eb2ed7afd3117ff943994158d9645eac05dbe",
            },
        })
            .then((res) => res.json())
            .then((json) => setData(json));
    }, []);

	return (
		<>
			<Stack direction="row" alignItems="center" spacing={2}>
				<label htmlFor="icon-button-file">
					<IconButton
						color="info"
						// aria-label="upload picture"
						// component="span"
            onClick={() => navigate("/newevent")}
					>
						<AddCircle />Create Event
					</IconButton>
				</label>
			</Stack>
            <Grid container spacing={3}>
                {data?data.map((item)=>{return(
      <Grid item xs={3}>
								<Item>
									<div className="the-Container">
										<div className="the-Card">
											<div className="the-Front">
											{item.name}
												<img className="front_img" src={data.image} />
											</div>
											
										</div>
									</div>
								</Item>
							</Grid>
                            
                            )}):<p>Loadnih</p>}
                            </Grid>
                            
		</>
	);
}
