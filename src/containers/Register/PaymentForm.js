import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { connect } from "react-redux";
import {stepTwoData} from './../../store/action/action';


const PaymentForm = (props) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [rePwd, setRePwd] = useState("");

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Enter yours Email and password.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
            type="email"
            required
            id="email"
            label="Email"
            name="email"
            fullWidth
            // onChange={(e) => setEmail(e.target.value)}
            onChange={(e) => props.onSignIn({email: e.target.value, password: props.password})}
            autoComplete="cc-name"
          />
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <TextField
            required
            type="email"
            id="cardNumber"
            label="Email"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid> */}
        <Grid item xs={12} md={6}>
          <TextField
            type="password"
            required
            id="password"
            label="Password"
            onChange={(e) => setPwd(e.target.value)}
            fullWidth
            autoComplete="cc-exp"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            type="password"
            required
            id="repwd"
            label="Re enter password"
            // helperText="Last three digits on signature strip"
            // onChange={(e) => setRePwd(e.target.value)}
            onChange={(e) => props.onSignIn({email: props.email, password: e.target.value})}

            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.regis.email,
    password: state.regis.password,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignIn: (data) => dispatch(stepTwoData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentForm)