import React, { useState } from "react";
//import image from "../../alies/wgMLUS.jpg";
//import Container from "@material-ui/core/Container";

import { connect } from "react-redux";

import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
//import Card from "@material-ui/core/Card";
//import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import HeaderBar from "../../components/HeaderBar/HeaderBar";
import PCard from "../../components/Card/PCard";
import AdmitTable from "./AdmitTable";
import DischargeTable from './DischargeTable'


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
    backgroundColor: "white",
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

const Doctor = (props) => {
  const classes = useStyles();
  const [newPatients, loadNewPatients] = useState(false);
  const [discharge, setDischarge] = useState(false);

  const products = [
    { name: "Product 1", desc: "A nice thing", price: "$9.99" },
    { name: "Product 2", desc: "Another thing", price: "$3.45" },
    { name: "Product 3", desc: "Something else", price: "$6.51" },
    { name: "Product 4", desc: "Best thing of all", price: "$14.11" },
    { name: "Product 1", desc: "A nice thing", price: "$9.99" },
    { name: "Product 2", desc: "Another thing", price: "$3.45" },
    { name: "Product 3", desc: "Something else", price: "$6.51" },
    { name: "Product 4", desc: "Best thing of all", price: "$14.11" },
    { name: "Product 1", desc: "A nice thing", price: "$9.99" },
    { name: "Product 2", desc: "Another thing", price: "$3.45" },
  ];
  //   let patient = products.map((pro, index) => {
  //     return (
  //       <Grid key={index} xs={4} item>
  //         <PCard
  //           key={index}
  //           title={pro.name}
  //           user={pro.price}
  //           desc={pro.desc}
  //         />
  //         {console.log(pro.name)}
  //       </Grid>
  //     );
  //   });
  let patient = null;
  console.log(patient);
  //   const loadPatientHandler = (e) => {
  //     e.preventDefault();

  patient = products.map((pro, index) => {
    return (
      <Grid key={index} xs={3} item>
        <PCard key={index} title={pro.name} user={pro.price} desc={pro.desc} />
        {console.log(pro.name)}
      </Grid>
    );
  });
  console.log(patient);
  console.log(props.name);
  console.log(props.username);
  console.log(props.type);
  //loadNewPatients(true);
  //   };

  return (
    // <Container fixed>
    //   <img src={image} alt="background" />
    // </Container>
    <div className={classes.root}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <HeaderBar />
        <Grid container>
          <Grid item container xs={2}>
            <Paper className={classes.paperNav} elevation={20} square>
              <Grid item container spacing={2} direction="column" >
                <Grid item xs>
                  <Typography variant="h5" component="h2">
                    Doctor
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() => loadNewPatients(true)}
                    // onClick={signInHandler}
                  >
                    Admit Patient
                  </Button>
                </Grid>
                <Grid item xs>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    // onClick={signInHandler}
                  >
                    Discharge Patient
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item container xs={10}>
            {/* <Paper className={classes.paperWin}>
            </Paper> */}
            {newPatients ? <AdmitTable /> : "ddddddd"}
          </Grid>
        </Grid>

        {/* <Card className={classes.card}>
          <CardContent>Hello World</CardContent>
        </Card> */}
      </Paper>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.username,
    name: state.name,
    type: state.type

  };
};

export default connect(mapStateToProps)(Doctor);
