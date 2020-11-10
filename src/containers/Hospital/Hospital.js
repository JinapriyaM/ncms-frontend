import React from "react";
//import image from "../../alies/wgMLUS.jpg";
//import Container from "@material-ui/core/Container";

import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
//import Card from "@material-ui/core/Card";
//import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography"

import HeaderBar from "../../components/HeaderBar/HeaderBar";
import AddDoctor from "./AddDoctor"
import Account from "./Account"
import BedStat from "../../components/Chart/HospitalBeds";
import { connect } from "react-redux";


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
    height: "90vh",
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

const Hospital = (props) => {
  const classes = useStyles();
  const [showAddDoctot, setAddDoctor] = React.useState(false);
  const [showAccount, setShowAccount] = React.useState(false);
  const [showStat, setShowStat] = React.useState(false);
  const [values, setVals] = React.useState(0);
  // const [statData, ]
  // let vals = 0;

  const getPatients = () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({ userName: 'madushanka', password: '123456' })
    };
    fetch(`http://localhost:8080/statistics?user=hospital&hospitalId=${props.hospital}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.Response.map(i => i.firstname))
        // const newData = data.Response
        
        console.log(data.Response);
       const vals = Number(data.Response);
       setVals(vals)
        
        
        // updateDataset(0, [10,20]);
      
      }).then(() => setShowStat(true));
  };

  // React.useEffect(() => {
  //   getPatients();
  // }, []);

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
            <Paper className={classes.paperNav}>
              <Grid item container spacing={2} direction="column">
              <Grid item xs>
                  <Typography variant="h5" component="h2" align="center">
                    Hospital
                  </Typography>
                  <Typography variant="h5" component="h2" align="center">
                    {props.name}
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    // onClick={signInHandler}
                    onClick={() => {
                      setAddDoctor(true);
                      setShowAccount(false)
                      setShowStat(false)
                    }}
                  >
                    Add Doctor
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
                    onClick={() => {
                      setAddDoctor(false);
                      setShowAccount(false)
                   
                      getPatients();
                    }}
                  >
                    Statistics
                  </Button>
                </Grid>
                {/* <Grid item xs>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    // onClick={signInHandler}
                    onClick={() => {
                      setAddDoctor(false);
                      setShowAccount(true)
                      setShowStat(false)
                    }}
                  >
                    Account
                  </Button>
                </Grid> */}
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={10}>
            {/* <Paper className={classes.paperWin}></Paper> */}
            {showAddDoctot ? <AddDoctor /> : showAccount ? <Account /> : showStat ? <BedStat hosId={props.hospital} val={values} /> : null }
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
    hospital: state.user.id,
    name: state.user.name
  };
};

export default connect(mapStateToProps)(Hospital);
