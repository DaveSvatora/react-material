import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      padding: theme.spacing(2)
    },
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper
  }
}));

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined" size="large">
        Default
      </Button>
      <Button variant="outlined" color="primary" size="large">
        Primary
      </Button>
      <Button variant="outlined" color="secondary" size="large">
        Secondary
      </Button>
      <Button variant="outlined" disabled size="large">
        Disabled
      </Button>
      <Button
        variant="outlined"
        color="primary"
        href="#outlined-buttons"
        size="large"
      >
        Link
      </Button>
    </div>
  );
}
