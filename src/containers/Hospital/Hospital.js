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

import HeaderBar from "../../components/HeaderBar/HeaderBar";
import AddDoctor from "./AddDoctor"
import Account from "./Account"

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
                    variant="outlined"
                    color="primary"
                    className={classes.submit}
                    // onClick={signInHandler}
                    onClick={() => {
                      setAddDoctor(false);
                      setShowAccount(false)
                      setShowStat(true)
                    }}
                  >
                    Statistics
                  </Button>
                </Grid>
                <Grid item xs>
                  <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
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
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={10}>
            {/* <Paper className={classes.paperWin}></Paper> */}
            {showAddDoctot ? <AddDoctor /> : showAccount ? <Account /> : null }
          </Grid>
        </Grid>

        {/* <Card className={classes.card}>
          <CardContent>Hello World</CardContent>
        </Card> */}
      </Paper>
    </div>
  );
};

export default Hospital;
