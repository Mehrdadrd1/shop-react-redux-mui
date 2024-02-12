import React, { useEffect } from "react";
import { Box, Pagination } from "@mui/material";
import useStyles from "./pagination.Style";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const ProductsPagination = (props) => {
  const { classes } = useStyles();
  const products = props.data;
  console.log(products);

  return (
    <Box className={classes.root}>
      <Pagination count={5} />
    </Box>
  );
};

export default ProductsPagination;
