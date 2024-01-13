import React from "react";

const GetProducts = async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
};

export default GetProducts;
