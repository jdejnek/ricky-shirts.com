import { createContext } from "react";
import PRODUCTS from '../shop-data.json';
import { useState } from "react";

export const ProductContext = createContext({
    products: [],

});
export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = { products };
    return (
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}