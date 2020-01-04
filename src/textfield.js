import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      padding: theme.spacing(1)
    },
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper
  }
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form noValidate autoComplete="off">
        <TextField id="standard-basic" label="Standard" color="secondary" />
        <TextField
          id="filled-basic"
          label="Filled"
          variant="filled"
          color="secondary"
        />
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          color="secondary"
        />
      </form>
    </div>
  );
}
