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


const columns = [
  { id: "name", label: "First Name", minWidth: 170 },
  { id: "code", label: "Last Name", minWidth: 100 },
  {
    id: "population",
    label: "District",
    minWidth: 170,
    //     align: 'right',
    //     format: (value) => value.toLocaleString('en-US'),
    //
  },
  {
    id: "size",
    label: "Gender",
    minWidth: 170,
    // align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "density",
    label: "Age",
    minWidth: 10,
    align: "center",
    format: (value) => value.toFixed(0),
  },
];

function createData(name, code, population, size, density) {
  //const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("Madushanka", "Kulasinghe", "Kandy", "Male", 20),
  createData("Dilanka", "Yapa", "Kandy", "Male", 22),
  createData("Thilanka", "Yapa", "Kandy", "Male", 36),
  createData("Hasitha", "Karunathilaka", "Kandy", "Male", 45),
  createData("Eranga", "Perera", "Matale", "Female", 41),
  createData("Priyanthi", "Alwis", "Matale", "Female", 65),
  createData("Thilanka", "sdfs", "Kandy", "Male", 54),
  createData("Sureka", "dfsdff", "Kandy", "Male", 44),
  createData("Dulshan", "fdfd", "Kandy", "Male", 56),
  createData("Japan", "fdfsdfd", "Kandy", "Male", 22),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
                      <Button color="secondary" variant="contained">
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
