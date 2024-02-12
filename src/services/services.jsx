import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Data = () => {
  const countData = () => {
    const url = "https://fakestoreapi.com/products";
    const res = axios.get(url);
    return res.data;
  };

  const { data } = useQuery({
    queryKey: ["productsData"],
    queryFn: countData,
  });

  return data;
};

const service = {
  getData: () => {
    const data = Data();
    return new Promise((resolve, reject) =>
      resolve({
        count: data.length,
      })
    );
  },
};

export default service;
