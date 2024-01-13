import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    paper: {
      main: "#dedede",
    },
    primary: {
      main: "#bce1a7",
    },
    secondary: {
      main: "#e1ccca",
    },
    error: {
      main: "#ed002b",
    },
    success: {
      main: "#00be00",
    },
    text: {
      main: "#3c3c3c",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontSize: 20,
  },
});

export default theme;
