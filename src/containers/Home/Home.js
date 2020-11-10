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
  const [hosCount, setHosCount] = React.useState(0);
  const [pasCount, setPasCount] = React.useState(0);
  const [disCount, setDisCount] = React.useState(0);
  const [toCount, setToCount] = React.useState(0);

  const getPatients = () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({ userName: 'madushanka', password: '123456' })
    };
    fetch("http://localhost:8080/statistics?user=general", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.Response.map(i => i.firstname))
        // const newData = data.Response
        
        console.log(data.Response);
        setPasCount(data.patients);
        setDisCount(data.dis);
        setToCount(data.to);
        setHosCount(data.hos);
        // console.log(Object.values(data[0]))
        // rows.push(Object.values(data[0]))
        // console.log(typeof(data[0]))
      });
  };

  React.useEffect(() => {
    getPatients();
  }, []);


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
              Total Hospitals: {hosCount}
            </Typography>
            <Typography variant="h5" align="center" component="h2">
              Total Cases: {pasCount}
            </Typography>
            <Typography variant="h5" align="center" component="h2">
              Admitted Patients: {disCount}
            </Typography>
            <Typography variant="h5" align="center" component="h2">
              To Admit: {toCount}
            </Typography>
            <Typography variant="h5" align="center" component="h2">
              Discharged: {Number(pasCount) - (Number(toCount) + Number(disCount))}
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
