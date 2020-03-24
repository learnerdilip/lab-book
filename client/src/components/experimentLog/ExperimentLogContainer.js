import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
          <Link to="/logform">
            <Button className="daydiv" variant="outlined" color="primary">
              <div>
                <p className="calenderDay">{day}</p>
              </div>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
