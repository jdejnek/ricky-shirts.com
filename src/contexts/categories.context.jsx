import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

// Categories context

export const CategoriesContext = createContext({
    categoriesMap: {},
    prints: [],
    stickers: []

});

// Provider
export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const [prints, setPrints] = useState([]);
    const [stickers, setStickers] = useState([]);

    // Fetch the map
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap)
            const { prints, stickers } = categoryMap;
            setPrints(prints);
            setStickers(stickers);
        }
        getCategoriesMap();
    }, []);

    // Pass values to the provider
    const value = { categoriesMap, prints, stickers };
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}