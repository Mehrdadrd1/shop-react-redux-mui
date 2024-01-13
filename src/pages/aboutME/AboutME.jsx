import { Box } from "@mui/material";
import React from "react";
import Layout from "../../layout/Layout";
import useStyles from "./abouteME.style";

const AboutME = () => {
  const { classes } = useStyles();

  return (
    <Layout>
      <Box className={classes.root} sx={{ boxShadow: 5 }}>
        AboutME
      </Box>
    </Layout>
  );
};

export default AboutME;
