import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Pagination from "@mui/material/Pagination";

const Pages = () => {
  return (
    <Box>
      <Pagination count={10} color="secondary" />
    </Box>
  );
};

export default Pages;
