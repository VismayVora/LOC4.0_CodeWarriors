import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function SignInSide() {
	const [person, setPerson] = useState({
		email: "",
		password: "",
		phone: "",
		pincode: "",
	});
	const [people, setPeople] = useState([]);

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setPerson({ ...person, [name]: value ? value : null });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(person.email);
		console.log(person);
		if (person.email && person.password && person.phone && person.pincode) {
			const newPerson = { ...person };
			setPeople([...people, newPerson]);
			setPerson({ email: "", password: "", phone: "", pincode: "" });

			var formdata = new FormData();
			formdata.append("email", newPerson.email);
			formdata.append("password", person.password);

			var requestOptions = {
				method: "POST",
				body: formdata,
				redirect: "follow",
			};

			fetch("https://dc5a-2401-4900-198b-aafb-f1ed-32ad-6425-c523.ngrok.io/register/", requestOptions)
				.then((response) => response)
				.then((result) => console.log(result))
				.catch((error) => console.log("fgsla", error));
		}
	};

	let navigate = useNavigate();

	return (
		<Grid
			container
			component="main"
			sx={{ height: "100vh", overflow: "hidden" }}
		>
			<Grid
				item
				xs={12}
				sm={8}
				md={8}
				component={Paper}
				elevation={6}
				square
				backgroundColor="#ececed"
			>
				{/* <img
					src={logo}
					alt="cover-img"
					style={{
						marginTop: "25px",
						display: "flex",
						justifyContent: "flex-start",
						marginLeft: "25px",
					}} */}
				/>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Typography
						component="h1"
						variant="h5"
						display="flex"
						flexDirection="column"
						alignItems="right"
						sx={{ mt: 8, fontWeight: "bold" }}
					>
						SIGN UP
					</Typography>
					<Typography component="h6">to continue and book your slot</Typography>
					<Box
						component="form"
						noValidate
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Grid
							container
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Grid
								item
								md={6}
								sm={12}
								xs={12}
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<TextField
									margin="normal"
									required
									value={person.email}
									onChange={handleChange}
									name="email"
									label="Email"
									type="email"
									id="email"
									sx={{ mt: 3, mb: 2, mr: 5, width: "300px" }}
								/>
							</Grid>
							<Grid
								item
								md={6}
								sm={12}
								xs={12}
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<TextField
									margin="normal"
									required
									name="phone"
									label="Phone Number"
									value={person.phone}
									onChange={handleChange}
									type="phone"
									id="phone"
									sx={{ mt: 3, mb: 2, mr: 5, width: "300px" }}
								/>
							</Grid>
						</Grid>

						<Grid
							container
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Grid
								item
								md={6}
								sm={12}
								xs={12}
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<TextField
									margin="normal"
									required
									name="pincode"
									label="Pincode"
									value={person.pincode}
									onChange={handleChange}
									type="pincode"
									id="pincode"
									sx={{ mt: 3, mb: 2, mr: 5, width: "300px" }}
								/>
							</Grid>
							<Grid
								item
								md={6}
								sm={12}
								xs={12}
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<TextField
									margin="normal"
									required
									name="password"
									value={person.password}
									onChange={handleChange}
									label="Password"
									type="password"
									id="password"
									autoComplete="current-password"
									sx={{ mt: 3, mb: 2, mr: 5, width: "300px" }}
								/>
							</Grid>
						</Grid>
						<p
							style={{
								textAlign: "center",
								fontSize: "0.89rem",
								color: "#1F2128",
							}}
						>
							Already have an account?{" "}
							<span
								onClick={() => navigate("/login")}
								style={{ cursor: "pointer", color: "blue" }}
							>
								Login
							</span>
						</p>

						<Grid
							container
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								marginLeft: "-35px",
							}}
						>
							<Button
								className="main_btn"
								type="submit"
								variant="outlined"
								onClick={handleSubmit}
								sx={{
									width: "300px",
									height: "50px",
									mt: 4,
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									flexDirection: "column",
									fontWeight: "bold",
									"&:hover": { color: "#69FFF1", backgroundColor: "black" },
								}}
								// sx={{ "&:hover": { color: "#69FFF1", backgroundColor:"black"} }}
							>
								Sign Up
							</Button>
						</Grid>
					</Box>
				</Box>
			</Grid>

			<Grid
				item
				xs={false}
				sm={false}
				md={4}
				sx={{
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundColor: "#1F2128",
				}}
			>
				{/* <img
					src={cover}
					alt="cover-img"
					style={{ width: "100%", height: "100vh" }}
				/> */}
				<Button
					className="login_button"
					type="button"
					variant="contained"
					onClick={() => {
						navigate("/login");
					}}
					sx={{
						mt: -145,
						mb: 2,
						mr: 58,
						padding: "10px",
						width: "110px",
						backgroundColor: "#1F2128",
						paddingRight: "25px",
						paddingTop: "10px",
						paddingBottom: "10px",
						color: "#ECECED",
						fontWeight: "bold",
						borderRadius: "0px 25px 25px 0px !important",
					}}
				>
					Login
				</Button>
				<Button
					className="login_button"
					type="button"
					variant="contained"
					onClick={() => {
						navigate("/signup");
					}}
					sx={{
						mt: -135,
						mb: 2,
						mr: 58,
						padding: "10px",
						width: "110px",
						backgroundColor: "#ECECED",
						paddingRight: "25px",
						paddingTop: "10px",
						paddingBottom: "10px",
						color: "#1F2128",
						fontWeight: "bold",
						borderRadius: "0px 25px 25px 0px !important",
					}}
				>
					Sign Up
				</Button>
				<Typography
					component="h6"
					variant="h2"
					fontWeight="bold"
					fontSize="35px"
					color="white"
					sx={{
						mt: -55,
						mr: 12,
						ml: 15,
						opacity: 1,
					}}
				>
					Hey there!
				</Typography>
			</Grid>
		</Grid>
	);
}
