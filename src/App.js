import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { connect } from "react-redux";
import SignIn from "./containers/Signinup/SignIn";
import Home from "./containers/Home/Home";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import Register from "./containers/Register/Register";
import Doctor from "./containers/Doctor/Doctor";
import Hospital from "./containers/Hospital/Hospital";
import Moh from "./containers/Moh/Moh";
import Patient from "./containers/Patient/Patient";

function App(props) {
  let rout = null;
  if(props.logged){
    rout = (<>
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
          </>)
  }
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
          {rout}
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

const mapStateToProps = (state) => {
  return {
    logged: state.user.logged
  }
}

export default connect(mapStateToProps)(App);
