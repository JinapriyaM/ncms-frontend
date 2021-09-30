import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";



const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

const Review = (props) => {
  const classes = useStyles();

  const products = [
    { name: "First Name" , desc: 'A nice thing', price: props.firstname },
    { name: 'Last Name', desc: 'Another thing', price: props.lastname },
    { name: 'District', desc: 'Something else', price: props.district },
    { name: 'Contact No', desc: 'Best thing of all', price: props.contactno },
    { name: 'Location X', desc: '', price: props.locationx },
    { name: 'Location Y', desc: '', price: props.locationy },
    { name: 'Gender', desc: '', price: props.gender },
    { name: 'Age', desc: '', price: props.age },
  ];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Please check all details are correct
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name}  />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        {/* <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            $34.06
          </Typography>
        </ListItem> */}
      </List>
      {/* <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid> */}
    </React.Fragment>
  );
}
const mapStateToProps = (state) => {
  return {
    firstname: state.regis.firstname,
    lastname: state.regis.lastname,
    address: state.regis.address,
    contactno: state.regis.contactno,
    district: state.regis.district,
    locationx: state.regis.locationx,
    locationy: state.regis.locationy,
    gender: state.regis.gender,
    age: state.regis.age,
    email: state.regis.email,
    password: state.regis.password,
  };
};

export default connect(mapStateToProps)(Review);