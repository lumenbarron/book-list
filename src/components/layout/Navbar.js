import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <div color="primary" className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Post Everything!
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
