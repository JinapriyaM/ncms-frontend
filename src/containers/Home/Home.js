import React from "react";
//import image from "../../alies/wgMLUS.jpg";
//import Container from "@material-ui/core/Container";

import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
//import Card from '@material-ui/core/Card';
//import CardContent from '@material-ui/core/CardContent';

import HeaderBar from "../../components/HeaderBar/HeaderBar";
//import SignIn from '../Signinup/SignIn'
// import image from '../../alies/hospital.jpg'
import image from "../../alies/homeback.jpg";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  root: {
    // padding: '8px',
    height: "100vh",
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    // backgroundRepeat: "no repeat00"
    backgroundSize: "cover"
  },
  paper: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    
  },
  card: {
    backgroundColor: "blue",
  },
  papercard: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Home = (props) => {
  const classes = useStyles();

  return (
    // <Container fixed>
    //   <img src={image} alt="background" />
    // </Container>
    <div className={classes.root}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <HeaderBar />
        <div className={classes.papercard}>
          <Paper className={classes.papercard}>
            <Typography variant="h3" align="center" component="h2">
              National Covid Management System
            </Typography>
            <Typography variant="h5" align="center" component="h2">
              Total Hospitals: 5
            </Typography>
            <Typography variant="h5" align="center" component="h2">
              Total Cases: 76
            </Typography>
            <Typography variant="h5" align="center" component="h2">
              Admitted Patients: 50
            </Typography>
            <Typography variant="h5" align="center" component="h2">
              Waiting List: 26
            </Typography>

          </Paper>
        </div>

        {/* <Card className={classes.card}>
          <CardContent>Hello World</CardContent>
        </Card> */}
      </Paper>
    </div>
  );
};

export default Home;
