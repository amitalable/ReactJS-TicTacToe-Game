import { useState, useEffect } from "react";
import * as ProductsAPI from "../services/ProductsServices";

const useGetProductsAPI = () => {
  const [productList, setProductList] = useState([]);
  const setData = (response) => {
    setProductList(response.data);
  };
  useEffect(() => {
    ProductsAPI.getProducts()
      .then((response) => setData(response))
      .catch((error) => console.log(error));
  }, []);
  return { productList };
};

export { useGetProductsAPI };
