import { Box } from "@mui/material";
import React from "react";
import useStyles from "./sideBar.style";

const SideBar = () => {
  const { classes } = useStyles();
  return <Box className={classes.root}>SideBar</Box>;
};

export default SideBar;
