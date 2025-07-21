import { createContext, useEffect, useState } from "react";
import { customerHealthPlan } from "../../utils/data/customerHealthPlan"
import { customers } from "../../utils/data/customers"
import { healthPlans } from "../../utils/data/healthPlans"
import axiosInstance from "../../api/axiosInstance";

export const StoreContext = createContext({});

export const StoreProvider = ({ children }) => {
    const [loggedinUser, setLoggedinUser] = useState({});
    const [customersData, setCustomersData] = useState([])
    const [healthplansData, setHealthplansData] = useState([])
    const [customerhealthplansData, setCustomerhealthplansData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [metadata, setMetadata] = useState({});

    const [eventMessages, setEventMessagesin] = useState([
        // {
        //     "event_type": "update",
        //     "benefit_event_id": {
        //         "$oid": "6878917b80624116cd005593"
        //     },
        //     "changed_fields": {
        //         "provider": "traCigna"
        //     },
        //     "benefit_event_data": {
        //         "_id": {
        //             "$oid": "6878917b80624116cd005593"
        //         },
        //         "id": 153,
        //         "plan_name": "Cigna PPO Select",
        //         "plan_type": "PPO",
        //         "provider": "traCigna",
        //         "fields": {
        //             "includes_prescription": true,
        //             "dental_coverage": true,
        //             "vision_coverage": true,
        //             "deductible": 1000
        //         },
        //         "event_message": "Dental & Vision coverage is enabled !!"
        //     },
        //     "customer_health_plan": {
        //         "_id": 2,
        //         "customer_id": 2,
        //         "plan_id": 153,
        //         "enrollment_date": "2025-01-15",
        //         "status": "active"
        //     },
        //     "associated_customers": [
        //         {
        //             "customer_id": 2,
        //             "customer_data": {
        //                 "id": 2,
        //                 "first_name": "Bob",
        //                 "last_name": "Johnson",
        //                 "email": "bob.johnson@email.com",
        //                 "date_of_birth": "1990-07-22",
        //                 "address": "456 Oak St, Miami, FL"
        //             }
        //         }
        //     ]
        // }
    ]) as any
    const setUser = (data) => {
        setLoggedinUser(data)
    }
    const setEventMessages = (data) => {
        setEventMessagesin((prevData) => [...prevData, data])
    }

    const fetchData = async () => {
        const fetchAllData = async () => {
            setLoading(true);

            const customersPromise = await axiosInstance.get('/customers');
            const plansPromise = await axiosInstance.get('/health_plans');
            const customerHealthPlansPromise = await axiosInstance.get('/cust_health_plans');

            const results = await Promise.allSettled([
                customersPromise,
                plansPromise,
                customerHealthPlansPromise,
            ]);

            // Handle results
            results.forEach((result, index) => {
                if (result.status === 'fulfilled') {
                    switch (index) {
                        case 0:
                            setCustomersData(result.value.data);
                            break;
                        case 1:
                            setHealthplansData(result.value.data);
                            break;
                        case 2:
                            setCustomerhealthplansData(result.value.data);
                            break;
                        default:
                            break;
                    }
                } else {
                    setError(result.reason);
                }
            });

            setLoading(false);
        };

        fetchAllData();
    }

    useEffect(() => {
        fetchData()
    }, []);

    const handleContextSubmit = (data: any, key: number) => {
        setMetadata(prevdata => ({
            ...prevdata,
            [key]: data
        }))
    }

    const getAllData = () => {
        fetchData()
    }

    return (<StoreContext.Provider value={{
        customersData,
        healthplansData, customerhealthplansData, loggedinUser, setUser, setEventMessages,
        eventMessages,fetchData
    }}>
        {children}
    </StoreContext.Provider>);
}
