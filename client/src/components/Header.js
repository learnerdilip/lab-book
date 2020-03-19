import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

export default function Header() {
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
          <a style={{ textDecoration: "none", color: "White" }} href="/">
            DIGITAL LAB BOOK{" "}
          </a>
        </Typography>
        <div id="loginsignupbutton">
          <Button variant="contained" color="default">
            <Link to="/login">Login</Link>
          </Button>
          <Button variant="contained" color="default">
            <Link to="/signup">Signup</Link>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
