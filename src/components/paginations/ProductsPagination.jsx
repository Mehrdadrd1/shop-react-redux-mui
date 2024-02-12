import React, { useEffect, useState } from "react";
import { Box, Pagination } from "@mui/material";
import useStyles from "./pagination.Style";
import service from "../../services/service";

const pageSize = 4;

const ProductsPagination = ({ setProducts }) => {
  const { classes } = useStyles();
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  useEffect(() => {
    service
      .getData({ from: pagination.from, to: pagination.to })
      .then((response) => {
        setPagination({ ...pagination, count: response.count });
        setProducts(response.data);
      });
  }, [pagination.from, pagination.to]);

  const handlePageChange = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;

    setPagination({ ...pagination, from: from, to: to });
  };

  return (
    <Box className={classes.root}>
      <Pagination
        count={Math.ceil(pagination.count / pageSize)}
        onChange={handlePageChange}
      />
    </Box>
  );
};

export default ProductsPagination;
