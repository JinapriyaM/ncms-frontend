import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import Button from "@material-ui/core/Button";


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

const Ambulance = () => {
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
                    Ambulance
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
                  >
                    Register a new Ambulance
                  </Button>
                </Grid>
                {props.isDirector=="1" ? <Grid item xs>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() => {
                      loadNewPatients(false);
                      setDischarge(true);
                    }}
                  >
                    Unregister an Ambulance
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
                    Currenct Almbulances
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
    )
}

export default Ambulance;