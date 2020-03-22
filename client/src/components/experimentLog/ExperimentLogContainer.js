import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function createData(name, calories, fat, carbs, protein, extra) {
  return { name, calories, fat, carbs, protein, extra };
}

const rows = [
  createData("Frozen yoghurt", 1, 2, 3, 4, 5),
  createData("Ice cream sandwich", 6, 7, 8, 9, 10),
  createData("Eclair", 11, 12, 13, 14, 15),
  createData("Cupcake", 16, 17, 18, 19, 20),
  createData("Gingerbread", 21, 22, 23, 24, 25),
  createData("Cupcake", 26, 27, 28, 29, 30)
];

export default function ExperimentLogContainer() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <Link to="/logform">
                {" "}
                <Button variant="contained">{row.calories}</Button>{" "}
              </Link>
              <Link to="/logform">
                {" "}
                <Button variant="contained">{row.fat}</Button>{" "}
              </Link>
              <Link to="/logform">
                {" "}
                <Button variant="contained">{row.carbs}</Button>{" "}
              </Link>
              <Link to="/logform">
                {" "}
                <Button variant="contained">{row.protein}</Button>{" "}
              </Link>
              <Link to="/logform">
                {" "}
                <Button variant="contained">{row.extra}</Button>{" "}
              </Link>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
