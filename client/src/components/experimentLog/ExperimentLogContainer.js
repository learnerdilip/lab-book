import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { dateFormat } from "../../helperfunctions";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export default function ExperimentLogContainer() {
  const classes = useStyles();

  const state = useSelector(reduxState => reduxState.experiments.experiments);

  const daysofMonth = state;

  if (state.length < 1) return <h2>Loading...</h2>;
  return (
    <div>
      <h2>THE CURRENT MONTH</h2>

      <div className="calenderdays">
        {daysofMonth.map(day => (
          <Link to={`/log/${day._id}`}>
            <Button className="daydiv" variant="outlined" color="primary">
              <div>
                <p className="calenderDay">{dateFormat(day.date)}</p>
              </div>
            </Button>
          </Link>
        ))}
        <Link to={`/logform/${dateFormat(new Date())}`}>
          <Button className="daydiv" variant="outlined" color="primary">
            <div>
              <p className="calenderDay">{dateFormat(new Date())}</p>
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
}
