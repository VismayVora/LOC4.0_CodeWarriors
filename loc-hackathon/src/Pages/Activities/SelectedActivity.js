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
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { Button } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Input = styled('input')({
    display: 'none',
  });


export default function SelectedActivity() {
	const [data,setData]=useState()
	const itemid = sessionStorage.getItem('item_id');
	console.log(itemid)
	useEffect(() => {
		fetch("http://9eae-106-209-235-77.ngrok.io/Activity/"+itemid, {
			headers: {
				Authorization: "Token 226eb2ed7afd3117ff943994158d9645eac05dbe",
			},
		})
			.then((res) => res.json())
			.then((json) => setData(json));
	}, []);
	return (
		<div>
			{data?
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				<Grid item xs={6} md={8}>
					<Item>
						<img className="selected_img" src={data.image} />
					</Item>
				</Grid>
				<Grid item xs={6} md={4}>
				<Item> <h1>Description</h1> </Item>
					<Item>{data.description}</Item>
					
				</Grid>
				<Grid item xs={6} md={12}>
					<Item>
					<h1>Exercise Name</h1>
						<Checkbox {...label} defaultChecked />
						{data.name}
					</Item>
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
				</Grid>
			</Grid>
		</Box>:<p>Loading....</p>}
		</div>
	);
}
