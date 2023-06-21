import { createContext, useState, useEffect } from "react";
import { useFetch } from "../hooks";

export const ProductDetailContext = createContext({});

function ProductDetailProvider({ children }) {
    const [productID, setProductID] = useState('');
    // const { data, loading, error } = useFetch(url);
    const [url, setUrl] = useState('')
    const { data, loading, error } = useFetch(url);


    useEffect(() => {
        if (productID) {
            setUrl(`http://localhost:8080/api/products/${productID}`)
            console.log('hello')
        }
    }, [productID])

  return (
    <ProductDetailContext.Provider value={{data, loading, error, setProductID}}>{children}</ProductDetailContext.Provider>
  );
}

export default ProductDetailProvider