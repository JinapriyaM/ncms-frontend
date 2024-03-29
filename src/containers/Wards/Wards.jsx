import React, { useState } from "react";

import { connect } from "react-redux";

import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import HeaderBar from "../../components/HeaderBar/HeaderBar";
import PCard from "../../components/Card/PCard";
import AdmitTable from "./AdmitTable";
import DischargeTable from "./DischargeTable";

const useStyles = makeStyles({
  root: {
    // padding: '8px',
    height: "100vh",
  },
  paper: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  paperNav: {
    width: "100%",
    height: "93vh",
    backgroundColor: "gray",
  },
  paperWin: {
    width: "100%",
    height: "90vh",
    backgroundColor: "white",
  },
  card: {
    backgroundColor: "blue",
  },
});

const Wards = (props) => {
    const classes = useStyles();
  const [newPatients, loadNewPatients] = useState(false);
  const [discharge, setDischarge] = useState(false);

  const products = [
    { name: "Product 1", desc: "A nice thing", price: "$9.99" },
    { name: "Product 2", desc: "Another thing", price: "$3.45" },
    { name: "Product 3", desc: "Something else", price: "$6.51" },
  ];
  let patient = null;

  const loginHandler = (event) => {
    event.preventDefault();
    // console.log(formState.email);
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({ userName: 'madushanka', password: '123456' })
    };
    fetch("http://localhost:8080/doctor/getNotAdmitPatients", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <HeaderBar />
        <Grid container>
          <Grid item container xs={2}>
            <Paper className={classes.paperNav} elevation={20} square>
              <Grid item container spacing={2} direction="column">
                <Grid item xs>
                  <Typography variant="h5" component="h2" align="center">
                    Wards
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() => {
                      loadNewPatients(true);
                      setDischarge(false);
                    }}
                    // onClick={signInHandler}
                  >
                    Create new Ward
                  </Button>
                </Grid>
                {props.isDirector=="1" ? <Grid item xs>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    // onClick={signInHandler}
                    onClick={() => {
                      loadNewPatients(false);
                      setDischarge(true);
                    }}
                  >
                    Remove Ward
                  </Button>
                </Grid> : null}
                <Grid item xs>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={loginHandler}
                  >
                    Statistics
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item container xs={10}>
            {newPatients ? (
              <AdmitTable hosId={props.hosId} />
            ) : discharge ? (
              <DischargeTable hosId={props.hosId} docId={props.docId} />
            ) : (
              <Typography variant="h5" align="center" component="h2">
                This is ward {props.username}
              </Typography>
            )}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
  
}

export default Wards