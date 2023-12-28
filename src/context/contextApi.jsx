import { fetchDataFromApi } from "../utils/api";
import { createContext, useState, useEffect } from "react";

export const Context = createContext();

export const AppContext = ({children}) => {
    const [loading, setLoading] = useState(false)
    const [searchResults, setSearchResults] = useState(false)
    const [selectCatagories, setSelectCatagories] = useState("New")
    const [mobileMenu, setMobileMenu] = useState(false)
    useEffect(()=>{
        fetchSelectedCatagoryData(selectCatagories)
    },[selectCatagories])
    const fetchSelectedCatagoryData = (query) => {
        setLoading(true)
        // console.log("hello");
        fetchDataFromApi(`search/?q=${query}`).then((res)=>{
            // console.log(res);
            setSearchResults(res)
            setLoading(false)
        })
    }
    return (
        <Context.Provider value={{
            loading,
            setLoading,
            searchResults,
            setSearchResults,
            selectCatagories,
            setSelectCatagories,
            mobileMenu,
            setMobileMenu
        }}>
            {children}
        </Context.Provider>
    )
}