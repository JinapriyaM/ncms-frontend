import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";

import Home from "./containers/Home/Home";
import Signinup from "./containers/Signinup/Signinup";
import Register from './containers/Register/Register';
import Doctor from './containers/Doctor/Doctor';
import DoctorStat from './containers/Doctor/DoctorStat/DoctorStat';

import MainNavigation from "./components/Navigation/MainNavigation";
import Footer from './components/Footer/Footer';

function App() {
	return (
		<Router>
			<MainNavigation />
			<main>
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/sign" exact>
						<Signinup />
					</Route>
					<Route path="/doctor" exact>
						<Doctor />
					</Route>
					<Route path="/doctor-stat" exact>
						<DoctorStat />
					</Route>
					<Route path="/register" exact>
						<Register />
					</Route>
					<Redirect to="/" />
				</Switch>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
