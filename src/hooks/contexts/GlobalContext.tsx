import { createContext, useState } from "react";
import { customerHealthPlan } from "../../utils/data/customerHealthPlan"
import { customers } from "../../utils/data/customers"
import { healthPlans } from "../../utils/data/healthPlans"

export const StoreContext = createContext({});

export const StoreProvider = ({ children }) => {
    const [loggedinUser, setLoggedinUser] = useState({});
    const [customersData, setCustomersData] = useState(customers)
    const [healthplansData, setHealthplansData] = useState(healthPlans)
    const [customerhealthplansData, setCustomerhealthplansData] = useState(customerHealthPlan)
    const setUser = (data) => {
setLoggedinUser(data)
    }

    return (<StoreContext.Provider value={{ customersData, 
    healthplansData, customerhealthplansData,loggedinUser,setUser }}>
        {children}
    </StoreContext.Provider>);
}
