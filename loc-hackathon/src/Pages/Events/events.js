import React from "react";
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


export default function OutlinedCard() {
	const classes = useStyles();
  const navigate = useNavigate();
	const bull = <span className={classes.bullet}>•</span>;
	const arr = [1];

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
				<Grid item xs={3}>
					<div>
						{arr.map((item) => {
							return (
								<div className="Container">
									<div className="Card">
										<div className="Front">Meditation</div>
									</div>
								</div>
							);
						})}
					</div>
				</Grid>
			</Grid>
		</>
	);
}
