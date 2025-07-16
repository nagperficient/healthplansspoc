import { createContext, useState } from "react";

const StoreContext = createContext({});

export const StoreProvider = ({ children }) => {
    const [store, setStore]= useState([{plan:"2",name:"4"}]);
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>; 
}
