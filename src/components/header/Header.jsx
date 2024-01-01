import { Box, Typography } from "@mui/material";
import React from "react";
import useStyles from "./header.style";

const Header = () => {
  const { classes } = useStyles();

  return (
    <Box>
      <Typography className={classes.hiro}>Header</Typography>
      <Box className={classes.nav}>NavBar</Box>
    </Box>
  );
};

export default Header;
