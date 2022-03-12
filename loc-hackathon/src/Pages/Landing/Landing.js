import React, { useState } from "react";
import img from "../../assets/img.png";
import sports from "../../assets/sports.png"
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
                md={7}
                component={Paper}
                elevation={6}
                square
                sx={{
                    backgroundColor:
                        "linear-gradient(140.85deg, rgba(100, 100, 202, 0.41) -16.02%, rgba(128, 128, 255, 0.13) 112.29%);",
                    height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'
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
                    >
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
                                        top: "-20%",
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
                                        top: "-20%",
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
                                        height: '100%'
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

                        <Box>
                        </Box>
                    </Box>
                </div>
            </Grid>

            <Grid
                item
                xs={false}
                sm={4}
                md={5}
                sx={{
                    backgroundImage: img,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "#1F2128",
                }}
            >
                <img
                    src={sports}
                    style={{ width: "100%", height: "100vh" }}
                    alt="login-img"
                />
            </Grid>
        </Grid>
    );
}