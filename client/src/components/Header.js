import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "@material-ui/core";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          // className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6">
          <a style={{ textDecoration: "none",color:"White" }} href="/">
            DIGITAL LAB BOOK{" "}
          </a>
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
