import React from "react";
import { Box, Container } from "@mui/material";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </Container>
  );
};

export default Layout;
