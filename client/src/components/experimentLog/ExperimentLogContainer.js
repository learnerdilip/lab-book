import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, Card } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const getDays = () => {
  const days = [];
  for (let i = 0; i < 30; i++) {
    days.push(i + 1);
  }
  return days;
};
const daysofMonth = getDays();

export default function ExperimentLogContainer() {
  const classes = useStyles();

  return (
    <div>
      <h2>THE CURRENT MONTH</h2>

      <div className="calenderdays">
        {daysofMonth.map(day => (
          <Card className="daydiv" key={day}>
            <Link to="/logform">
              <div>
                <p className="calenderDay">{day}</p>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
