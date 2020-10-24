import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Enter yours Email and password.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
            type="email"
            required
            id="email"
            label="Email"
            name="email"
            fullWidth
            autoComplete="cc-name"
          />
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <TextField
            required
            type="email"
            id="cardNumber"
            label="Email"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid> */}
        <Grid item xs={12} md={6}>
          <TextField
            type="password"
            required
            id="password"
            label="Password"
            fullWidth
            autoComplete="cc-exp"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            type="password"
            required
            id="repwd"
            label="Re enter password"
            // helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}
