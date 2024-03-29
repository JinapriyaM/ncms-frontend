import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";


const columns = [
  { id: "firstname", label: "First Name", minWidth: 170 },
  { id: "lastname", label: "Last Name", minWidth: 100 },
  {
    id: "district",
    label: "District",
    minWidth: 150,
    //     align: 'right',
    //     format: (value) => value.toLocaleString('en-US'),
    //
  },
  {
    id: "gender",
    label: "Gender",
    minWidth: 150,
    // align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "age",
    label: "Age",
    minWidth: 10,
    align: "center",
    format: (value) => value.toFixed(0),
  },
];

// const loginHandler = (event) => {
//   event.preventDefault();
// console.log(formState.email);

// }

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable(props) {
  const genderObject = [{ gen: "Low" }, { gen: "Mid" }, { gen: "High" }];
  const flatProps = {
    options: genderObject.map((option) => option.gen),
  };
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = React.useState([]);
  const [upd, setUpd] = React.useState("");
  const [sav, setSav] = React.useState("Low");
  // let rows  = []

  const getPatients = () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({ userName: 'madushanka', password: '123456' })
    };
    // fetch("http://localhost:8080/doctor/getNotAdmitPatients", requestOptions)
    fetch(
      `http://localhost:8080/doctor/getNotAdmitPatients?hospitalId=${props.hosId}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.Response.map(i => i.firstname))
        // const newData = data.Response
        setRows(data);
        // console.log(Object.values(data[0]))
        // rows.push(Object.values(data[0]))
        // console.log(typeof(data[0]))
      });
  };

  const admitHandler = (row) => {
    //e.preventDefault();
    // alert(email + password);
    var details = {
      doctorId: "d3a10ddf-4a53-41d4-a119-cbc5f0041be3",
      patientId: row.id,
      severityLevel: sav,
    };

    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      // body: JSON.stringify({ userName: 'madushanka', password: '123456' })
      body: formBody,
    };
    fetch("http://localhost:8080/doctor/admitPatient", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        //props.onSignIn(data);
        console.log(data);
        setUpd(data);

        //setResData(data);
      });
  };

  React.useEffect(() => {
    getPatients();
  }, [upd]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h2" align="center">
        ADMIT PATIENT
      </Typography>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell>
                      <Autocomplete
                        required
                        {...flatProps}
                        id="flat-demo"
                        value={props.gender}
                        
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Severity"
                            // margin="normal"
                            variant="outlined"
                          />
                        )}

                        onChange={(e, value)=>setSav(value)}
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        color="secondary"
                        variant="contained"
                        onClick={() => admitHandler(row)}
                      >
                        ADMIT
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
