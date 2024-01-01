import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#faed3c",
      main: "#ffdb00",
      dark: "#ffa800",
    },
    secondary: {
      light: "#9497cd",
      main: "#2d339e",
      dark: "#15187e",
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
  },
});

export default theme;
