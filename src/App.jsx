import { RouterProvider } from "react-router-dom";
import router from "./components/router/Router";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/Theme";
import { CssBaseline } from "@mui/material";
import "./style.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
