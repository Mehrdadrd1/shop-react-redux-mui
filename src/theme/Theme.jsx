import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#faed3c",
      main: "#ffdb00",
    },
    secondary: {
      light: "#f0e6ff",
      main: "#15187e",
    },
    error: {
      main: "#ed002b",
    },
    success: {
      main: "#00be00",
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
