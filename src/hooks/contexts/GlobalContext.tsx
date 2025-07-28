import { createContext, useEffect, useState } from "react";
import { customerHealthPlan } from "../../utils/data/customerHealthPlan"
import { customers } from "../../utils/data/customers"
import { healthPlans } from "../../utils/data/healthPlans"
import axiosInstance, { BASEURL } from "../../api/axiosInstance";

const notificationsDummyData = [
    { id: 1, customer_name: 'Alice', plan_id: '151', message: 'New user registered', is_read: false },
    { id: 2, customer_name: 'Bob', plan_id: '152', message: 'Plan upgraded', is_read: true },
    { id: 3, customer_name: 'Charlie', plan_id: '153', message: 'Payment received', is_read: false },
    { id: 4, customer_name: 'Diana', plan_id: '154', message: 'Subscription cancelled', is_read: true },
    { id: 5, customer_name: 'Ethan', plan_id: '155', message: 'Trial period started', is_read: false },
    { id: 6, customer_name: 'Fiona', plan_id: '156', message: 'Email verified', is_read: true },
    { id: 7, customer_name: 'George', plan_id: '157', message: 'Password changed', is_read: false },
    { id: 8, customer_name: 'Hannah', plan_id: '158', message: 'Account suspended', is_read: true },
    { id: 9, customer_name: 'Ian', plan_id: '159', message: 'New device login', is_read: false },
    { id: 10, customer_name: 'Julia', plan_id: '160', message: 'Feedback submitted', is_read: true },
    { id: 11, customer_name: 'Kevin', plan_id: '161', message: 'Billing info updated', is_read: false },
    { id: 12, customer_name: 'Laura', plan_id: '162', message: 'Support ticket opened', is_read: true },
    { id: 13, customer_name: 'Mike', plan_id: '163', message: 'Referral bonus credited', is_read: false },
    { id: 14, customer_name: 'Nina', plan_id: '164', message: 'Account reactivated', is_read: true },
    { id: 15, customer_name: 'Oscar', plan_id: '165', message: 'Two-factor enabled', is_read: false }
]
export const StoreContext = createContext({});

export const StoreProvider = ({ children }) => {
    const [loggedinUser, setLoggedinUser] = useState({});
    const [customersData, setCustomersData] = useState([]);
    const [healthplansData, setHealthplansData] = useState([]);
    const [customerhealthplansData, setCustomerhealthplansData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [metadata, setMetadata] = useState({});
    const [unreadMessages, setUnreadMessagesData] = useState(notificationsDummyData);

    const [eventMessages, setEventMessagesin] = useState([]) as any
    const setUser = (data) => {
        setLoggedinUser(data)
    }
    const setEventMessages = (data) => {
        setEventMessagesin((prevData) => [...prevData, data])
    }
    const handleUnreadMessages = (data) => {
        setUnreadMessagesData((prevData) => [...prevData, data])
    }
    const fetchAllNotifications = async () => {
        try {
            // Backend API call
            const unreadNotifications = await fetch(`${BASEURL}/api/notifications/unread`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            handleUnreadMessages(unreadNotifications);
        } catch (err) {
            console.error('Failed to mark notification as read:', err);
        }
    };
    const markAsRead = async (id: string) => {
        setUnreadMessagesData((prev: any) =>
                    prev.map((msg: any) =>
                    msg.id === id ? { ...msg, is_read: !msg.is_read } : msg
                )
            );

        // try {
        //     if (!id) return;

        //     // Backend API call
        //     const unread =  await fetch(`${BASEURL}/api/notifications/${id}/read`, {
        //         method: 'PUT',
        //         headers: { 'Content-Type': 'application/json' },
        //         // body: JSON.stringify({ id: id })
        //     });

        //     console.log("unread messages");
        //     // Optimistically update UI
        //     setUnreadMessagesData((prev: any) =>
        //         prev.map((msg: any) =>
        //             msg.id === id ? { ...msg, is_read: !msg.is_read } : msg
        //         )
        //     );

        // } catch (err) {
        //     console.error('Failed to mark notification as read:', err);
        // }
    };
    
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
        fetchData();
        fetchAllNotifications();
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
        eventMessages, fetchData, unreadMessages, markAsRead
    }}>
        {children}
    </StoreContext.Provider>);
}
