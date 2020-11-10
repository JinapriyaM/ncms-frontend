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
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

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

const AddHospital = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [emailValidate, setEmailValidate] = useState("");
  const [passwordValidate, setPasswordValidate] = useState("");
  const [isDerector, setDirector] = useState("0");
  const [isAlert, setAlert] = useState(0);
  const [openSu, setOpenSuc] = useState(false);
  const [openFa, setOpenFai] = useState(false);
  const [isRedirect, setRedirect] = useState(false);
  const [resData, setResData] = useState(null);

  const validateInputs = (email, password) => {
    if (!validEmailRegex.test(email)) {
      setEmailValidate("Email is not valid");
      return false;
    } else if (password.length < 8) {
      setPasswordValidate("Password must be greater than 8 characters.");
      return false;
    } else if (password !== repassword) {
      setPasswordValidate("Passwords are not match");
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
        name: name,
        hospitalId: props.hospital,
        isDirector: isDerector,
        email: email,
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
      fetch("http://localhost:8080/doctor/register", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.Response === "success") {
            setOpenSuc(true);
          } else {
            // setAlert(2);
            setOpenFai(true);
          }
          setEmail("");
          setName("");
          setPassword("");
          setRePassword("");


          //setResData(data);
        })
        .catch((error) => console.log(error));
    }
  };

  // const sucMsg = (
  //   <Snackbar open={open} autoHideDuration={6000}>
  //     <Alert severity="success">This is a success message!</Alert>
  //   </Snackbar>
  // );

  //rea = resData === "madu" ? <Redirect to={{ pathname: "/doctor" }} /> : null;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* {isAlert === 1 ? <Alert severity="success">This is a success alert — check it out!</Alert>: isAlert === 2 ? <Alert severity="error">This is an error alert — check it out!</Alert> : null} */}
      <Snackbar open={openSu} autoHideDuration={3000} onClose={() => setOpenSuc(false)} anchorOrigin={{vertical:'bottom', horizontal:'center'}}>
        <Alert variant="filled" severity="success">Succesfully Registerd</Alert>
      </Snackbar>
      <Snackbar open={openFa} autoHideDuration={3000} onClose={ () => setOpenFai(false)} anchorOrigin={{vertical:'bottom', horizontal:'center'}}>
        <Alert severity="error">Unsuccesful.</Alert>
      </Snackbar>
      <CssBaseline />
      <Paper className={classes.paperroot}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
            <Typography component="h1" variant="h5">
              Add Doctor
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                size="small"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
                error={emailValidate}
                helperText={emailValidate}
              />
              <TextField
                variant="outlined"
                margin="normal"
                size="small"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                value={name}
                autoComplete="email"
                onChange={(e) => setName(e.target.value)}

                // error={emailValidate}
                // helperText={emailValidate}
              />

              <TextField
                variant="outlined"
                margin="normal"
                size="small"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                error={passwordValidate}
                helperText={passwordValidate}
              />
              <TextField
                variant="outlined"
                margin="normal"
                size="small"
                required
                fullWidth
                name="repassword"
                value={repassword}
                label="Re-enter Password"
                type="password"
                id="repassword"
                onChange={(e) => setRePassword(e.target.value)}
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
                Add Doctor
              </Button>
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
    hospital: state.user.id,
  };
};

export default connect(mapStateToProps)(AddHospital);
