import React from "react";
import { Box, Container } from "@mui/material";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import styles from "./style";

const Layout = ({ children }) => {
  return (
    <Container maxWidth="xl" sx={styles.layout}>
      <Box>
        <Header />
      </Box>
      <Box>{children}</Box>
      <Box>
        <Footer />
      </Box>
    </Container>
  );
};

export default Layout;
