import axios from "axios";

const GetData = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

export default GetData;
