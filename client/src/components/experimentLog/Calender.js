import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from "@material-ui/core";

export default function Calender() {
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

  return (
    <div>
      <ul>
        {allmonthdays.map(day => (
          <h2>{day}</h2>
        ))}
      </ul>
    </div>
  );
}
