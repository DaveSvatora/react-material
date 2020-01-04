import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import ReactDOM from "react-dom";
import Box from "@material-ui/core/Box";
import Button from "./button";
import Appbar from "./appbar";
import Textfield from "./textfield";
import List from "./list";
import Tab from "./tab";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";

function App() {
  const prefersDarkMode = true;
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light"
        }
      }),
    [prefersDarkMode]
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Appbar />
        <Box display="flex" justifyContent="center">
          <Tab />
        </Box>
        <Box display="flex" justifyContent="center">
          <Textfield />
        </Box>
        <Box display="flex" justifyContent="center">
          <List />
        </Box>
        <Box display="flex" justifyContent="center">
          <Button />
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
