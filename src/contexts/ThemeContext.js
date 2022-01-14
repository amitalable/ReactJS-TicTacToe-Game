import React, { createContext } from "react";
import { useGetProductsAPI } from "../hooks/useGetProductsAPI";

const ThemeContext = createContext({
  productList: [],
});

ThemeContext.displayName = "ProductList";

const ThemeProvider = ({ children }) => {
  const { productList } = useGetProductsAPI();

  const context = { productList };
  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
