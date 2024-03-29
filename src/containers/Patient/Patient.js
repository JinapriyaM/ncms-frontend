import React, { useState } from "react";
import image from "../../alies/wgMLUS.jpg";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";


import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import HeaderBar from "../../components/HeaderBar/HeaderBar";
import PCard from "../../components/Card/PCard";

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

const Patient = (props) => {
  const classes = useStyles();
  const [newPatients, loadNewPatients] = useState(false);



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
                    Patient
                  </Typography>
                </Grid>
                {/* <Grid item xs>
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
                </Grid> */}
              </Grid>
            </Paper>
          </Grid>
          <Grid item container xs={10} alignItems="center" justify="center">
            <Grid item>
            <Typography variant="h5" align="center" component="h2">
              Email: {props.username}
            </Typography>
            <Typography variant="h5" align="center" component="h2">
              Status: {props.status}
            </Typography>
            <Typography variant="h5" align="center" component="h2">
              Hospital Name: {props.hosId} 
            </Typography>
            <Typography variant="h5" align="center" component="h2">
              Severity Level: {props.level} 
            </Typography>
            <Typography variant="h5" align="center" component="h2">
              No: {props.queue} 
            </Typography>
            </Grid>
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
    username: state.user.username,
    hospital: state.user.id,
    hosId: state.user.hospitalId,
    name: state.user.name,
    status: state.user.status,
    level: state.user.level,
    queue: state.user.queue
   
  };
};

export default connect(mapStateToProps)(Patient);
