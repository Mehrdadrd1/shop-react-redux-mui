import { Box, Typography } from "@mui/material";
import React from "react";
import useStyles from "./footer.style";
import { useTheme } from "@mui/material";
import GitHub from "../../assets/images/github-Logo.png";
import LinkedIn from "../../assets/images/linkedin-Logo.png";
import Vercel from "../../assets/images/vercel-Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const { classes } = useStyles();
  const theme = useTheme();

  return (
    // <Box className={classes.root}>
    <Box className={classes.root} sx={{ boxShadow: 10 }}>
      <Box className={classes.typography}>
        <Typography variant="body2" color={theme.palette.text.main}>
          All Rights Reserved.
        </Typography>
      </Box>
      <Box className={classes.buttomNavigate}>
        <Link to={"https://github.com/Mehrdadrd1"}>
          <Box
            component="img"
            alt="GitHub"
            src={GitHub}
            className={classes.logo}
          />
        </Link>
        <Link to={"https://www.linkedin.com/in/mehrdadrd/"}>
          <Box
            component="img"
            alt="LinkedIN"
            src={LinkedIn}
            className={classes.logo}
          />
        </Link>
        <Link to={"https://vercel.com/mehrdad-rayatis-projects"}>
          <Box
            component="img"
            alt="Vercel"
            src={Vercel}
            className={classes.logo}
          />
        </Link>
      </Box>
    </Box>
    // </Box>
  );
};

export default Footer;
