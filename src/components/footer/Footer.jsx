import { Box, Typography } from "@mui/material";
import React from "react";
import useStyles from "./footer.style";

const Footer = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.footer}>
      <Typography className={classes.copyRight}>copyRight</Typography>
      <Typography className={classes.mainFooter}>mainFooter</Typography>
      <Typography className={classes.contact}>Contact</Typography>
    </Box>
  );
};

export default Footer;
