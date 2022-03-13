import React, { useState } from "react";
import img from "../../assets/img.png";
import sports from "../../assets/sports.png";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import { Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LoginIcon from "@mui/icons-material/Login";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Landing.css";
import plank from "../../assets/plank.jpg";
import pullups from "../../assets/pullups.webp";
import pushup from "../../assets/pushup.jpg";
import tone from '../../assets/tone.jpg';

export default function Landing() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	return (
		<Grid
			container
			component="main"
			sx={{ height: "100vh", overflow: "hidden" }}
		>
			<Grid
				item
				xs={12}
				sm={6}
				md={5}
				component={Paper}
				elevation={6}
				square
				sx={{
					backgroundColor:
						"linear-gradient(140.85deg, rgba(100, 100, 202, 0.41) -16.02%, rgba(128, 128, 255, 0.13) 112.29%);",
					height: "100vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div>
					<Box
                    
						sx={{
							my: 8,
							mx: 4,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
                       
					> <div className="text"><h1><b><i>Nothing will work unless you do!</i></b></h1></div>
						<Grid container>
							<Grid item md={6} sx={{ position: "relative" }}>
								<div
									className="circle"
									style={{
										position: "absolute",
										width: "60px",
										height: "60px",
										backgroundColor: "#0950D5",
										color: "white",
										borderRadius: "50%",
										top: "-30%",
										left: "35%",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<LoginIcon />
								</div>
								<div
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										width: "100%",
										height: "100%",
									}}
								>
									<Card sx={{ width: "80%", height: "100%" }}>
										<CardContent>
											<div
												style={{
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													flexDirection: "column",
												}}
											>
												<p style={{ textAlign: "center" }}>
													Already have an account?
												</p>
												<Link
													to="/login"
													style={{
														textDecoration: "none",
														color: "#0950D5",
														marginTop: "11.4%",
													}}
												>
													Login
												</Link>
											</div>
										</CardContent>
									</Card>
								</div>
							</Grid>
							<Grid item md={6} sx={{ position: "relative" }}>
								<div
									className="circle"
									style={{
										position: "absolute",
										width: "60px",
										height: "60px",
										backgroundColor: "#0950D5",
										color: "white",
										borderRadius: "50%",
										top: "-30%",
										left: "35%",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<PeopleAltIcon />
								</div>
								<div
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										width: "100%",
										height: "100%",
									}}
								>
									<Card sx={{ width: "80%", height: "100%" }}>
										<CardContent>
											<div
												style={{
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													width: "100%",
													flexDirection: "column",
													// marginLeft:"2px"
												}}
											>
												<p style={{ textAlign: "center" }}>
													Don't have an account?
												</p>
												<Link
													to="/signup"
													style={{
														textDecoration: "none",
														color: "#0950D5",
														marginTop: "11.4%",
													}}
												>
													SignUp
												</Link>
											</div>
										</CardContent>
									</Card>
								</div>
							</Grid>
						</Grid>

						<Box></Box>
					</Box>
				</div>
			</Grid>

			<Grid
				item
				xs={false}
				sm={5}
				md={7}
				sx={{
					// backgroundImage: img,
					// backgroundSize: "cover",
					// backgroundPosition: "center",
					// backgroundColor: "#1F2128",
				}}
			>
				<Carousel fade className="mystyle">
					<Carousel.Item interval={800}>
						<img className="d-block w-101 " src={pullups} alt="Second slide" />
					</Carousel.Item>
					<Carousel.Item interval={800}>
						<img className="d-block w-110" src={pushup} alt="Third slide" />
					</Carousel.Item>
					<Carousel.Item interval={800}>
						<img
							style={{ height: "200px !important" }}
							className="d-block w-110 mystyle2"
							src={tone}
							alt="First slide"
						/>

						<Carousel.Caption>
							
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</Grid>
		</Grid>
	);
}

// import React from "react";
// import Carousel from "react-bootstrap/Carousel";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Landing.css";
// import plank from '../../assets/plank.jpg';
// import pullups from '../../assets/pullups.webp';
// import pushup from '../../assets/pushup.jpg';
// import tone from '../../assets/tone.jpg';
// // import "../styles/loginWith.css";
// function CarouselMode() {
//   const mystyle = {
//   height:"10%",
//   width:"30%",
//   display:"flex",
//   justifyContent:"flex-end",
//     };
//   return (
//     <div>

//       <Carousel fade className="mystyle">

//         <Carousel.Item interval={800}>
//           <img
//             className="d-block w-100"
//             src={pullups}
//             alt="Second slide"
//           />

//         </Carousel.Item>
//         <Carousel.Item interval={800}>
//           <img
//             className="d-block w-100"
//             src={pushup}
//             alt="Third slide"
//           />
//            </Carousel.Item>
//            <Carousel.Item interval={800}>
//           <img
//             style={{ height: "50px !important" }}
//             className="d-block w-100 mystyle2"
//             src={tone}
//             alt="First slide"
//           />

//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </div>
//   );
// }
// export default CarouselMode
