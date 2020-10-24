import React from "react";
import image from "../../alies/wgMLUS.jpg";
import Container from "@material-ui/core/Container";

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import HeaderBar from '../../components/HeaderBar/HeaderBar'
import SignIn from '../Signinup/SignIn'

const useStyles = makeStyles({
  root: {
    // padding: '8px',
    height: '100vh',
  },
  paper: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  card: {
    backgroundColor: 'blue',
  },
});

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
        
        {/* <Card className={classes.card}>
          <CardContent>Hello World</CardContent>
        </Card> */}
      </Paper>
    </div>
    
  );
};

export default Home;
