import { createContext, useState, useEffect } from "react";
import { useFetch } from "../hooks";

export const ProductContext = createContext({});

function ProductProvider({ children }) {
  const [url, setUrl] = useState(
    `http://localhost:8080/api/products?api_key=${process.env.REACT_APP_API_KEY}`
  );
  const { data, loading, error } = useFetch(url);
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    if (category) {
      setUrl(
        `http://localhost:8080/api/products?api_key=${process.env.REACT_APP_API_KEY}&category=${category}`
      );
    } else {
      setUrl(
        `http://localhost:8080/api/products?api_key=${process.env.REACT_APP_API_KEY}`
      );
    }
  }, [category]);

  return (
    <ProductContext.Provider value={{ data, loading, error, category, handleChange }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;