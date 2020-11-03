import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";

import HeaderBar from "../../components/HeaderBar/HeaderBar";
import { connect } from "react-redux";
import {clearRegData} from '../../store/action/action'


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ["Patient Details", "Account Details", "Review Details"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

const Checkout = (props) => {
  const classes = useStyles();
  const details =  {
    firstName : props.firstname,
    lastName : props.lastname,
    district : props.district,
    locationX : props.locationx,
    locationY : props.locationy,
    gender : props.gender,
    contact : props.contactno,
    email: props.email,
    age : props.age,
    password: props.password
  }
  const [activeStep, setActiveStep] = React.useState(0);
  const [msg, setMsg] = React.useState("");

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    console.log(activeStep)
    if(activeStep === 2){
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
      fetch("http://localhost:8080/regPatient", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          //props.onSignIn(data);
          console.log(data)

          //setResData(data);
        });
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <HeaderBar />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Register Patient
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Succefully Registerd.
                </Typography>
                <Typography variant="subtitle1">
                 You can check your status by signin to the account
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Register" : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    firstname: state.regis.firstname,
    lastname: state.regis.lastname,
    address: state.regis.address,
    contactno: state.regis.contactno,
    district: state.regis.district,
    locationx: state.regis.locationx,
    locationy: state.regis.locationy,
    gender: state.regis.gender,
    age: state.regis.age,
    email: state.regis.email,
    password: state.regis.password
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearData: (data) => dispatch(clearRegData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
