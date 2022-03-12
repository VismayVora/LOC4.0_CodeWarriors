import logo from './logo.svg';
import { Route, Routes } from "react-router";
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Outlet, Navigate } from "react-router-dom";
import LoginSide from "../src/Pages/Login/Login";
import SignInSide from "../src/Pages/Signup/Signup";
import Landing from "../src/Pages/Landing/Landing";
import './App.css';
import Dashboard from './Pages/dashboard/dashboard';
import Charts from './Pages/dashboard/chart';
import SpacingGrid from './Pages/dashboard/layout';


function App() {
  const theme = createTheme({
		palette: {
			secondary: {
				main: '#E33E7F'
			}
		}
	});
  return (
    <MuiThemeProvider theme={theme}>
			<Router>
				<div className="App">
					<Routes>
						<Route exact path='/login' element={<LoginSide />} />
						<Route path='/signup' element={<SignInSide />} />
            			<Route path='/' element={<Landing />} />
						<Route path='/dashboard' element={<Dashboard />} />
						<Route path='/charts' element={<Charts />} />
						<Route path='/spacinggrid' element={<SpacingGrid />} />
					</Routes>
				</div>
			</Router>
		</MuiThemeProvider>
  );
}

export default App;
