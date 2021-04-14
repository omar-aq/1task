import React from "react";

//material-ui
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

//pages
import Home from "./page/Home";

//theming
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#01b2ee",
    },
    secondary: {
      main: "#o1b3ee",
    },
  },
});

// primary color #01b2ee
// secondary color #o1b3ee
// price color #1eb3ec
// oldPrice color #727986

function App() {
  console.log(theme);
  return (
    <>
      <>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </>
    </>
  );
}

export default App;
