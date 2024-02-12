import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/redux/sliceCart";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
} from "@mui/material";
import useStyles from "./cards.style";

const SingleCard = (props) => {
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const product = props.data;
  return (
    <Card className={classes.singleCard}>
      <CardActionArea className={classes.singleCardAction}>
        <CardMedia
          component="img"
          src={product.image}
          alt={product.title}
          className={classes.singleCardImage}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            height: "400px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              height: "200px",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <Typography variant="h6" color="initial" align="center">
              {product.title}
            </Typography>
            <Typography variant="h6" color="initial" align="center">
              Category: {product.category}
            </Typography>
            <Typography variant="body1" color="initial">
              {product.description}
            </Typography>
          </Box>
          <Typography
            variant="body1"
            color="Highlight"
            align="center"
            fontWeight="bold"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Box sx={{ marginRight: "5px" }}>Price:</Box>
            <Box>${product.price}</Box>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.singleCardBtn}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(addToCart(product))}
        >
          Add To Card
        </Button>
        <Button variant="contained" color="primary">
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default SingleCard;
