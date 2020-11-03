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
import Typography from "@material-ui/core/Typography";

import HeaderBar from "../../components/HeaderBar/HeaderBar";
import AddHospital from "./AddHospital"
import Account from "./Account"

const useStyles = makeStyles({
  root: {
    // padding: '8px',
    height: "130vh",
  },
  paper: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  paperNav: {
    width: "100%",
    height: "120vh",
    backgroundColor: "gray",
  },
  paperWin: {
    width: "100%",
    height: "120vh",
    backgroundColor: "white",
  },
  card: {
    backgroundColor: "blue",
  },
});

const Moh = (props) => {
  const classes = useStyles();
  const [showAddHospital, setAddHospital] = React.useState(false);
  const [showAccount, setShowAccount] = React.useState(false)

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
                    MOH
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
                      setAddHospital(true);
                      setShowAccount(false)
                    }}
                  >
                    Add Hospital
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
                    Statistics
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
                      setAddHospital(false);
                      setShowAccount(true)
                    }}
                  >
                    Account
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={10}>
            {/* <Paper className={classes.paperWin}></Paper>
             */}
             {showAddHospital ? <AddHospital /> : showAccount ? <Account /> : null}
          </Grid>
        </Grid>

        {/* <Card className={classes.card}>
          <CardContent>Hello World</CardContent>
        </Card> */}
      </Paper>
    </div>
  );
};

export default Moh;
