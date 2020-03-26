import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Tooltip } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export default function ExperimentLogContainer() {
  const classes = useStyles();

  const experimentsForMonth = useSelector(
    reduxState => reduxState.experiments.experiments
  );
  const monthlogDates = useSelector(
    reduxState => reduxState.experiments.experimentDays
  );

  //the current month days calc
  const monthindex = 0;
  const currMonth = new Date().getMonth() + 1 - monthindex;
  const CalctotalmonthDays = (year, month) =>
    new Date(year, month, 0).getDate();
  const totalmonthdays = CalctotalmonthDays(2020, currMonth);
  // console.log("################### ", currMonth, totalmonthdays);
  function datesList(daysinmonth) {
    let dateArr = [];
    for (let i = 1; i <= daysinmonth; i++) dateArr.push(i);
    return dateArr;
  }
  const allmonthdays = datesList(totalmonthdays);
  // console.log("-----------allmonthdays----------", allmonthdays);
  //the current month days calc

  const arrFilled = allmonthdays.filter(day => monthlogDates.includes(day));
  const arrEmpty = allmonthdays.filter(day => !monthlogDates.includes(day));
  console.log("---the filled, empty arr-----", arrFilled, arrEmpty);

  if (experimentsForMonth.length < 1) return <h2>Loading...</h2>;
  return (
    <div>
      <h2>THE CURRENT MONTH</h2>

      <div className="calenderdays">
        <h3>FILLED DATES</h3>
        {experimentsForMonth.map(day => (
          <Tooltip title={day.title}>
            <Link to={`/log/${day._id}`}>
              <Button className="daydiv" variant="outlined" color="primary">
                <div>
                  <p className="calenderDay">{moment(day.date).format("D")}</p>
                </div>
              </Button>
            </Link>
          </Tooltip>
        ))}
        <h3>THE NON FILLED DATES</h3>
        {arrEmpty.map(date => (
          <Link to={`/logform/${date}`}>
            <Button className="daydiv" variant="outlined" color="secondary">
              <div>
                <p className="calenderDay">{date}</p>
              </div>
            </Button>
          </Link>
        ))}
      </div>
      {/* <Calender /> */}
    </div>
  );
}
