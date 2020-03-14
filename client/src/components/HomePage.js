import React from "react";
// import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function HomePage() {
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

  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <div id="homecategories">
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Your notes
          </Typography>
          <Typography variant="h2" component="h2">
            EXPERIMENT PLANNER
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" size="small">
            I HAVE AN IDEA
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Electronic Lab Book
          </Typography>
          <Typography variant="h2" component="h2">
            EXPERIMENTS WORK BOOK
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" size="small">
            START LOGGING
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
