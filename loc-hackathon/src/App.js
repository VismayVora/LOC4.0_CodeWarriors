import { Route, Routes } from "react-router";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import LoginSide from "../src/Pages/Login/Login";
import SignInSide from "../src/Pages/Signup/Signup";
import Landing from "../src/Pages/Landing/Landing";
import Activities from "../src/Pages/Activities/Activities"
import "./App.css";
import SelectedActivity from "./Pages/Activities/SelectedActivity";

function App() {
	const theme = createTheme({
		palette: {
			secondary: {
				main: "#E33E7F",
			},
		},
	});
	return (
		<MuiThemeProvider theme={theme}>
			<Router>
				<div className="App">
					<Routes>
						<Route exact path="/login" element={<LoginSide />} />
						<Route path="/signup" element={<SignInSide />} />
						<Route exact path="/activities" element={<Activities />} />
						<Route path="selected_activity" element={<SelectedActivity/>} />
						<Route path="/" element={<Landing />} />
					</Routes>
				</div>
			</Router>
		</MuiThemeProvider>
	);
}

export default App;
