import axios from "axios";

const getProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response;
  } catch (error) {
    throw error;
  }
};

export { getProducts };
