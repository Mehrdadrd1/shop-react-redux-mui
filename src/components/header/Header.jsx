import React from "react";
import useStyles from "./header.style";
import { Box, Typography } from "@mui/material";

const Header = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.header}>Header</Typography>
    </Box>
  );
};

export default Header;
