import React from "react";
// import Paper from "@material-ui/core/Paper";
import { getNotes } from "../store/notes/actions";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMonthLogs } from "../store/experiments/action";

export default function HomePage() {
  const dispatch = useDispatch();
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: "40%",
      height: "50vh"
    },
    title: {
      fontSize: 20
    },
    pos: {
      marginBottom: 12
    }
  });

  //got to notes page on click
  const handleNotesClick = () => {
    dispatch(getNotes());
  };

  const classes = useStyles();

  return (
    <div id="homecategories">
      <Link to="/notes">
        <Card
          onClick={handleNotesClick}
          id="plannercard"
          className="mainhomecard"
          variant="outlined"
        >
          <h2 className="homecardheading">Experiment Planner</h2>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {/* Your notes */}
            </Typography>
            <Typography variant="h2" component="h2">
              {/* Experiment Planner */}
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Link>
      <Link to="/experimentcalender">
        <Card
          onClick={() => dispatch(getMonthLogs())}
          id="experimentloggingcard"
          className="mainhomecard"
          variant="outlined"
        >
          <h2 className="homecardheading">Electronic Lab Book</h2>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {/* Experiments Log */}
            </Typography>
            <Typography variant="h2" component="h2">
              {/* Electronic Lab Book */}
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Link>
    </div>
  );
}
