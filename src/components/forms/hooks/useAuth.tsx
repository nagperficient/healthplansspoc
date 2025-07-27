import { useEffect, useState } from "react"

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setisLoading] = useState(true);
    const {profile: isLoggedInUser} = JSON.parse(localStorage.getItem("userData")||"{}")|| JSON.parse(localStorage.getItem("userData")||"{}") as any;
    useEffect(() => {
        setisLoading(true)
      Promise.resolve().then(()=>setIsAuthenticated(isLoggedInUser?.email?true:false||false))
      .then(() => setisLoading(false))
    return () => {

    }
      
    }, [isLoggedInUser?.email])
    
    return {
        isAuthenticated,
        isLoading,
        isLoggedInUser
    }
}
export default useAuth;