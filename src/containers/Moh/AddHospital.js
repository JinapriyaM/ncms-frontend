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
  const [hosEmail, setHosEmail] = useState("");
  const [hosName, setHosName] = useState("");
  const [district, setDistrict] = useState("");
  const [locationX, setLocationX] = useState("");
  const [locationY, setLocationY] = useState("");
  const [hospassword, sethosPassword] = useState("");
  const [rehospassword, setReHosPassword] = useState("");

  const [direcEmail, setDirecEmail] = useState("");
  const [direcName, setDirecName] = useState("");
  const [direcPwd, setDirecPwd] = useState("");
  const [direcRePwd, setDirecRePwd] = useState("");

  const [emailValidate, setEmailValidate] = useState("");
  const [passwordValidate, setPasswordValidate] = useState("");
  const [direcEmailValidate, setDirecEmailValidate] = useState("");
  const [direcPasswordValidate, setDirecPwdValidate] = useState("");

  const [isRedirect, setRedirect] = useState(false);
  const [resData, setResData] = useState(null);

  const [openSu, setOpenSuc] = useState(false);
  const [openFa, setOpenFai] = useState(false);


  const validateInputs = (hosemail, hospassword, direcemail, direcpwd) => {
    if (!validEmailRegex.test(hosemail)) {
      setEmailValidate("Email is not valid");
      return false;
    } else if (hospassword.length < 8) {
      setPasswordValidate("Password must be greater than 8 characters.");
      return false;
    } else if(hospassword !== rehospassword){
      setPasswordValidate("Passwords not match")
      return false;
    }else if(!validEmailRegex.test(direcemail)){
      setDirecEmailValidate("Email is not valid");
      return false;
    }else if (direcpwd.length < 8) {
      setDirecPwdValidate("Password must be greater than 8 characters.");
      return false;
    } else if(direcpwd !== direcRePwd){
      setDirecPwdValidate("Passwords not match");
      return false;
    }else{
      return true;
    }
  };

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  const signInHandler = (e) => {
    e.preventDefault();
    // alert(email + password);
    if (validateInputs(hosEmail, hospassword, direcEmail, direcPwd  )) {
      var details = {
        name: hosName,
        district: district,
        locationX: locationX,
        locationY: locationY,
        hosEmail: hosEmail,
        hosPwd: hospassword,
        direcEmail: direcEmail,
        direcName: direcName,
        direcPwd: direcPwd,
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
      fetch("http://localhost:8080/hospital/register", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          
          console.log(data)
          if (data.Response === "success") {
            setOpenSuc(true);
          } else {
            // setAlert(2);
            setOpenFai(true);
          }
          setHosEmail("");
          setHosName("");
          setDistrict("");
          setLocationX("");
          setLocationY("");
          sethosPassword("");
          setReHosPassword("");
          setDirecEmail("");
          setDirecName("");
          setDirecPwd("");
          setDirecRePwd("");
          //setResData(data);
        });
    }
  };
  
  //rea = resData === "madu" ? <Redirect to={{ pathname: "/doctor" }} /> : null;
  const classes = useStyles();
  return (
    <div className={classes.root}>
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
              Add Hospital
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
                autoComplete="email"
                onChange={(e) => setHosEmail(e.target.value)}
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
                autoComplete="email"
                onChange={(e) => setHosName(e.target.value)}
              
                // error={emailValidate}
                // helperText={emailValidate}
              />
              <TextField
                variant="outlined"
                margin="normal"
                size="small"
                required
                fullWidth
                id="district"
                label="District"
                name="district"
                autoComplete="email"
                onChange={(e) => setDistrict(e.target.value)}
              
                // error={emailValidate}
                // helperText={emailValidate}
              />
              <TextField
                variant="outlined"
                margin="normal"
                type="number"
                size="small"
                required
                fullWidth
                id="locationx"
                label="Location X"
                name="locationx"
                autoComplete="email"
                onChange={(e) => setLocationX(e.target.value)}
              
                // error={emailValidate}
                // helperText={emailValidate}
              />
              <TextField
                variant="outlined"
                margin="normal"
                type="number"
                size="small"
                required
                fullWidth
                id="locationy"
                label="Location Y"
                name="locationy"
                autoComplete="email"
                onChange={(e) => setLocationY(e.target.value)}
              
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
                onChange={(e) => sethosPassword(e.target.value)}
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
                label="Re-enter Password"
                type="password"
                id="repassword"
                onChange={(e) => setReHosPassword(e.target.value)}
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
                id="demail"
                label="Director's Email Address"
                name="demail"
                autoComplete="email"
                onChange={(e) => setDirecEmail(e.target.value)}
                error={emailValidate}
                helperText={emailValidate}
              />
              <TextField
                variant="outlined"
                margin="normal"
                size="small"
                required
                fullWidth
                id="dname"
                label="Name"
                name="dname"
                autoComplete="email"
                onChange={(e) => setDirecName(e.target.value)}
              
                // error={emailValidate}
                // helperText={emailValidate}
              />
              <TextField
                variant="outlined"
                margin="normal"
                size="small"
                required
                fullWidth
                name="dpassword"
                label="Director Password"
                type="password"
                id="dpassword"
                onChange={(e) => setDirecPwd(e.target.value)}
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
                name="drepassword"
                label="Re-enter Director Password"
                type="password"
                id="drepassword"
                onChange={(e) => setDirecRePwd(e.target.value)}
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
                Add Hospital
              </Button>
              
            </form>
          </div>
          <Box mt={8}>{/* <Copyright /> */}</Box>
        </Container>
      </Paper>
    </div>
  );
};

export default AddHospital;