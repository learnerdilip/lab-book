import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();

  const logoutuser = () => {
    dispatch({ type: "CLEAR_USER_DATA" });
  };
  const state = useSelector(reduxstate => reduxstate);

  return (
    <AppBar position="static">
      <Toolbar id="appheaderbar">
        <IconButton
          edge="start"
          // className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          {state.user.name && `Welcome scientist ${state.user.name}!`}
        </Typography>

        <Typography variant="h6">
          <a style={{ textDecoration: "none", color: "White" }} href="/">
            DIGITAL LAB BOOK{" "}
          </a>
        </Typography>
        <div id="loginsignupbutton">
          {state.user.token && (
            <Button onClick={logoutuser} variant="outlined" color="default">
              <Link to="/">logout</Link>
            </Button>
          )}
          {!state.user.token && (
            <Button variant="outlined" color="default">
              <Link to="/login">Login</Link>
            </Button>
          )}
          {!state.user.token && (
            <Button variant="outlined" color="default">
              <Link to="/signup">Signup</Link>
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}
