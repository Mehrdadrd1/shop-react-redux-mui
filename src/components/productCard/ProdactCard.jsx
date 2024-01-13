import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useStyles from "./productCard.style";

const ProductCard = (props) => {
  const { classes } = useStyles();
  const product = props.product;

  return (
    <Card sx={{ maxWidth: 345 }} className={classes.root}>
      <CardMedia
        sx={{ height: 140 }}
        image={product.image}
        title={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add To Cart</Button>
        <Button size="small">See More</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
