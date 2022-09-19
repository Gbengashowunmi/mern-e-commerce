import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductsContext = createContext();

export default function ProductsContextProvider(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/products-API");
      setProducts(result.data);
    };
    fetchData();
  }, []);
  // console.log(data.products);
  // console.log(products);
  return (
    <ProductsContext.Provider value={ products }>
      {props.children}
    </ProductsContext.Provider>
  );
}
