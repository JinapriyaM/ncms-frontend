import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { connect } from "react-redux";

import { stepOneData } from "../../store/action/action";

const AddressForm = (props) => {
  const genderObject = [{ gen: "Male" }, { gen: "Female" }];
  const flatProps = {
    options: genderObject.map((option) => option.gen),
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Enter Your Details Here.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            value= {props.firstname}
            onChange={(e) =>
              props.onRegisterStepOne({
                firstname: e.target.value,
                lastname: props.lastname,
                address: props.address,
                contactno: props.contactno,
                district: props.district,
                locationx: props.locationx,
                locationy: props.locationy,
                gender: props.gender,
                age: props.age
              })
            }
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            value= {props.lastname}
            onChange={(e) =>
              props.onRegisterStepOne({
                firstname: props.firstname,
                lastname: e.target.value,
                address: props.address,
                contactno: props.contactno,
                district: props.district,
                locationx: props.locationx,
                locationy: props.locationy,
                gender: props.gender,
                age: props.age
              })
            }
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address"
            label="Address"
            value= {props.address}
            onChange={(e) =>
              props.onRegisterStepOne({
                firstname: props.firstname,
                lastname: props.lastname,
                address: e.target.value,
                contactno: props.contactno,
                district: props.district,
                locationx: props.locationx,
                locationy: props.locationy,
                gender: props.gender,
                age: props.age
              })
            }
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            type="number"
            id="address2"
            name="contact"
            label="Contact Number"
            value= {props.contactno}
            onChange={(e) =>
              props.onRegisterStepOne({
                firstname: props.firstname,
                lastname: props.lastname,
                address: props.address,
                contactno: e.target.value,
                district: props.district,
                locationx: props.locationx,
                locationy: props.locationy,
                gender: props.gender,
                age: props.age
              })
            }
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="District"
            value= {props.district}
            onChange={(e) =>
              props.onRegisterStepOne({
                firstname: props.firstname,
                lastname: props.lastname,
                address: props.address,
                contactno: props.contactno,
                district: e.target.value,
                locationx: props.locationx,
                locationy: props.locationy,
                gender: props.gender,
                age: props.age
              })
            }
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            // onChange={(e) =>
            //   props.stepOneData({
            //     firstname: props.firstname,
            //     lastname: e.target.value,
            //     address: props.address,
            //     contactno: props.contactno,
            //     district: props.district,
            //     locationx: props.locationx,
            //     locationy: props.locationy,
            //     gender: props.gender,
            //     age: props.age
            //   })
            // }
            fullWidth
          /> */}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            required
            id="locationX"
            name="locationX"
            label="location X"
            value= {props.locationx}
            onChange={(e) =>
              props.onRegisterStepOne({
                firstname: props.firstname,
                lastname: props.lastname,
                address: props.address,
                contactno: props.contactno,
                district: props.district,
                locationx: e.target.value,
                locationy: props.locationy,
                gender: props.gender,
                age: props.age
              })
            }
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            required
            id="locationY"
            name="locationY"
            label="locationY"
            value= {props.locationy}
            onChange={(e) =>
              props.onRegisterStepOne({
                firstname: props.firstname,
                lastname: props.lastname,
                address: props.address,
                contactno: props.contactno,
                district: props.district,
                locationx: props.locationx,
                locationy: e.target.value,
                gender: props.gender,
                age: props.age
              })
            }
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Autocomplete
            required
            {...flatProps}
            id="flat-demo"
            value= {props.gender}
            renderInput={(params) => (
              <TextField {...params} label="Gender" margin="normal" />
            )}
            onChange={(e, value) =>
              props.onRegisterStepOne({
                firstname: props.firstname,
                lastname: props.lastname,
                address: props.address,
                contactno: props.contactno,
                district: props.district,
                locationx: props.locationx,
                locationy: props.locationy,
                gender: value,
                age: props.age
              })
            }
            // onChange={(e, value)=>alert(value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            required
            id="locationY"
            name="age"
            label="Age"
            value= {props.age}
            onChange={(e) =>
              props.onRegisterStepOne({
                firstname: props.firstname,
                lastname: props.lastname,
                address: props.address,
                contactno: props.contactno,
                district: props.district,
                locationx: props.locationx,
                locationy: props.locationy,
                gender: props.gender,
                age: e.target.value
              })
            }
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRegisterStepOne: (data) => dispatch(stepOneData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressForm);
