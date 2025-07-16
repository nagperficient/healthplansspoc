import { useState } from "react"

const useCustomers = () => {
    const [customers, setCustomers] = useState([])
    return {
        customers,
        setCustomers
    }
}
export default useCustomers;