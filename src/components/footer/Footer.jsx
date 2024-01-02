import { Box } from "@mui/material";
import React from "react";
import useStyles from "./footer.style";

const Footer = () => {
  const { classes } = useStyles();
  return <Box className={classes.root}>Footer</Box>;
};

export default Footer;
