import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { setUserData } from "../../store/action/action";

//import Avatar from '@material-ui/core/Avatar';
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

import HeaderBar from "../../components/HeaderBar/HeaderBar";

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: '8px',
    height: "100vh",
  },
  paperroot: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValidate, setEmailValidate] = useState("");
  const [passwordValidate, setPasswordValidate] = useState("");
  const [isRedirect, setRedirect] = useState(false);
  const [resData, setResData] = useState(null);
  let rea;

  const validateInputs = (email, password) => {
    if (!validEmailRegex.test(email)) {
      setEmailValidate("Email is not valid");
      return false;
    } else if (password.length < 8) {
      setPasswordValidate("Password must be greater than 8 characters.");
      return false;
    } else {
      return true;
    }
  };

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  const signInHandler = (e) => {
    e.preventDefault();
    // alert(email + password);
    if (validateInputs(email, password)) {
      var details = {
        userName: email,
        password: password,
      };

      var formBody = [];
      for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        // body: JSON.stringify({ userName: 'madushanka', password: '123456' })
        body: formBody,
      };
      fetch("http://localhost:8080/user/login", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          props.onSignIn(data);
          console.log(data)

          //setResData(data);
        });
    }
  };
  if (props.type === "patient") {
    rea = <Redirect to={{ pathname: "/patient" }} />;
  } else if (props.type === "doctor") {
    rea = <Redirect to={{ pathname: "/doctor" }} />;
  } else if (props.type === "hospital") {
    rea = <Redirect to={{ pathname: "/hospital" }} />;
  } else if (props.type === "moh") {
    rea = <Redirect to={{ pathname: "/moh" }} />;
  } else if (props.type === "no") {
    alert("Wrong user name or password");
  }
  //rea = resData === "madu" ? <Redirect to={{ pathname: "/doctor" }} /> : null;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      {rea}
      <Paper className={classes.paperroot}>
        <HeaderBar />
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
                error={emailValidate}
                helperText={emailValidate}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                error={passwordValidate}
                helperText={passwordValidate}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={signInHandler}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="forgrpwd" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/register" variant="body2">
                    {"Patient Register"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>{/* <Copyright /> */}</Box>
        </Container>
      </Paper>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
    type: state.user.type,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignIn: (data) => dispatch(setUserData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
