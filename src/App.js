import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import SignIn from "./containers/Signinup/SignIn";
import Home from "./containers/Home/Home";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import Register from "./containers/Register/Register";
import Doctor from "./containers/Doctor/Doctor";
import Hospital from "./containers/Hospital/Hospital";
import Moh from "./containers/Moh/Moh";
import Patient from "./containers/Patient/Patient";

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/sign" exact>
            <SignIn />
          </Route>
          <Route path="/doctor" exact>
            <Doctor />
          </Route>
          <Route path="/hospital" exact>
            <Hospital />
          </Route>
          <Route path="/moh" exact>
            <Moh />
          </Route>
          <Route path="/patient" exact>
            <Patient />
          </Route>
          {/* 
					<Route path="/doctor-stat" exact>
						<DoctorStat />
					</Route>
					<Route path="/admit-patient" exact>
						<AdmitPatient />
          </Route>
           */}
          <Route path="/register" exact>
            <Register />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>

      {/* <footer>ddddd</footer> */}
    </Router>
  );
}

export default App;
