import { createContext, useEffect, useState } from "react";
import { customerHealthPlan } from "../../utils/data/customerHealthPlan"
import { customers } from "../../utils/data/customers"
import { healthPlans } from "../../utils/data/healthPlans"
import axiosInstance, { BASEURL, BASEURL2 } from "../../api/axiosInstance";

const notificationsDummyData = [
    { id: 1, customerName: 'Alice', planId: '151', message: 'New user registered', isRead: false },
    { id: 2, customerName: 'Bob', planId: '152', message: 'Plan upgraded', isRead: true },
    { id: 3, customerName: 'Charlie', planId: '153', message: 'Payment received', isRead: false },
    { id: 4, customerName: 'Diana', planId: '154', message: 'Subscription cancelled', isRead: true },
    { id: 5, customerName: 'Ethan', planId: '155', message: 'Trial period started', isRead: false },
    { id: 6, customerName: 'Fiona', planId: '156', message: 'Email verified', isRead: true },
    { id: 7, customerName: 'George', planId: '157', message: 'Password changed', isRead: false },
    { id: 8, customerName: 'Hannah', planId: '158', message: 'Account suspended', isRead: true },
    { id: 9, customerName: 'Ian', planId: '159', message: 'New device login', isRead: false },
    { id: 10, customerName: 'Julia', planId: '160', message: 'Feedback submitted', isRead: true },
    { id: 11, customerName: 'Kevin', planId: '161', message: 'Billing info updated', isRead: false },
    { id: 12, customerName: 'Laura', planId: '162', message: 'Support ticket opened', isRead: true },
    { id: 13, customerName: 'Mike', planId: '163', message: 'Referral bonus credited', isRead: false },
    { id: 14, customerName: 'Nina', planId: '164', message: 'Account reactivated', isRead: true },
    { id: 15, customerName: 'Oscar', planId: '165', message: 'Two-factor enabled', isRead: false }
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
    const [unreadMessages, setUnreadmessagesData] = useState(notificationsDummyData);

    const [eventmessages, setEventmessagesin] = useState([]) as any
    const setUser = (data) => {
        setLoggedinUser(data)
    }
    const setEventmessages = (data) => {
        setEventmessagesin((prevData) => [...prevData, data])
    }
    const handleUnreadmessages = (data) => {
        setUnreadmessagesData((prevData) => [...prevData, data])
    }
    const fetchAllNotifications = async () => {
        try {
            // Backend API call
            const unreadNotifications = await fetch(`${BASEURL2}/api/notifications/unread`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            handleUnreadmessages(unreadNotifications);
        } catch (err) {
            console.error('Failed to mark notification as read:', err);
        }
    };
    const markAsRead = async (id: string) => {
        // setUnreadmessagesData((prev: any) =>
        //             prev.map((msg: any) =>
        //             msg.id === id ? { ...msg, isRead: !msg.isRead } : msg
        //         )
        //     );

        try {
            if (!id) return;

            // Backend API call
            const unread =  await fetch(`${BASEURL2}/api/notifications/${id}/read`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                // body: JSON.stringify({ id: id })
            });

            console.log("unread messages");
            // Optimistically update UI
            setUnreadmessagesData((prev: any) =>
                prev.map((msg: any) =>
                    msg.id === id ? { ...msg, isRead: !msg.isRead } : msg
                )
            );

        } catch (err) {
            console.error('Failed to mark notification as read:', err);
        }
    };
    
    const fetchData = async () => {
        const fetchAllData = async () => {
            setLoading(true);
            console.log("Calling fetchAllData");
            const customersPromise =  axiosInstance.get('/customers');
            const plansPromise =  axiosInstance.get('/health_plans');
            const customerHealthPlansPromise =  axiosInstance.get('/cust_health_plans');

            const results = await Promise.allSettled([
                customersPromise,
                plansPromise,
                customerHealthPlansPromise,
            ]);
            console.log("results", results);
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
        healthplansData, customerhealthplansData, loggedinUser, setUser, setEventmessages,
        eventmessages, fetchData, unreadMessages, markAsRead
    }}>
        {children}
    </StoreContext.Provider>);
}
