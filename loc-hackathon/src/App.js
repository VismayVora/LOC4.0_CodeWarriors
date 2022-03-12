import { Route, Routes } from "react-router";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import LoginSide from "../src/Pages/Login/Login";
import SignInSide from "../src/Pages/Signup/Signup";
import Landing from "../src/Pages/Landing/Landing";
import "./App.css";
import Dashboard from "./Pages/dashboard/dashboard";
import Charts from "./Pages/dashboard/chart";
import SpacingGrid from "./Pages/dashboard/layout";
import OutlinedCard from "./Pages/Events/events";
import Activities from "../src/Pages/Activities/Activities";
import NewEvent from "../src/Pages/Events/NewEvent";
import "./App.css";
import SelectedActivity from "./Pages/Activities/SelectedActivity";
import Timer from "./Pages/Activities/Timer";
import SelectedEvent from "./Pages/Events/SelectedEvent";

function App() {
	const theme = createTheme({
		palette: {
			secondary: {
				main: "#E33E7F",
			},
		},
	});
	const hoursMinSecs = { hours: 0, minutes: 1, seconds: 0 };
	return (
		<MuiThemeProvider theme={theme}>
			<Router>
				<div className="App">
					<Routes>
						<Route exact path="/login" element={<LoginSide />} />
						<Route path="/signup" element={<SignInSide />} />
						<Route path="/" element={<Landing />} />
						<Route path="/dashboard" element={<Dashboard />} />
						<Route exact path="/activities" element={<Activities />} />
						<Route path="selected_activity" element={<SelectedActivity />} />
						<Route path="/newevent" element={<NewEvent />} />
						<Route path="/event" element={<OutlinedCard />} />
						<Route path="/selectedevent" element={<SelectedEvent />} />
						<Route path="/timer" element={<Timer />} />
					</Routes>
				</div>
			</Router>
		</MuiThemeProvider>
	);
}

export default App;
