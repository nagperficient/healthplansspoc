import { createContext, useState, useEffect  } from "react";
import { customerHealthPlan } from "../../utils/data/customerHealthPlan"
import { customers } from "../../utils/data/customers"
import { healthPlans } from "../../utils/data/healthPlans"
import axiosInstance from "../../api/axiosInstance";

const HealthplansData = [
  {
    "_id": 151,
    "plan_name": "Cigna PPO Essential",
    "plan_type": "PPO",
    "provider": "Cigna",
    "coverage_area": "National",
    "monthly_premium": 430.00,
    "deductible": 1450.00,
    "coinsurance": "20% after deductible",
    "copay_primary": 32.00,
    "copay_specialist": 62.00,
    "out_of_pocket_max": 6550.00,
    "network_type": "PPO",
    "referral_required": false,
    "includes_prescription": true,
    "dental_coverage": false,
    "vision_coverage": false,
    "plan_url": "https://cigna.com/plans/ppo-essential",
    "plan_notes": "Essential coverage with broad network",
    "effective_date": "2025-01-01"
  },
  {
    "_id": 152,
    "plan_name": "Cigna PPO Select",
    "plan_type": "PPO",
    "provider": "Cigna",
    "coverage_area": "Texas",
    "monthly_premium": 460.00,
    "deductible": 1250.00,
    "coinsurance": "15% after deductible",
    "copay_primary": 26.00,
    "copay_specialist": 51.00,
    "out_of_pocket_max": 6250.00,
    "network_type": "PPO",
    "referral_required": false,
    "includes_prescription": true,
    "dental_coverage": false,
    "vision_coverage": false,
    "plan_url": "https://cigna.com/plans/ppo-select",
    "plan_notes": "Select plan for families",
    "effective_date": "2025-01-01"
  },
  {
    "_id": 153,
    "plan_name": "Cigna PPO Advantage",
    "plan_type": "PPO",
    "provider": "Cigna",
    "coverage_area": "Florida",
    "monthly_premium": 610.00,
    "deductible": 750.00,
    "coinsurance": "10% after deductible",
    "copay_primary": 21.00,
    "copay_specialist": 41.00,
    "out_of_pocket_max": 5100.00,
    "network_type": "PPO",
    "referral_required": false,
    "includes_prescription": true,
    "dental_coverage": false,
    "vision_coverage": false,
    "plan_url": "https://cigna.com/plans/ppo-advantage",
    "plan_notes": "Advantage tier with wellness benefits",
    "effective_date": "2025-01-01"
  },
  {
    "_id": 154,
    "plan_name": "Cigna HMO Value",
    "plan_type": "HMO",
    "provider": "Cigna",
    "coverage_area": "California",
    "monthly_premium": 395.00,
    "deductible": 1750.00,
    "coinsurance": "22% after deductible",
    "copay_primary": 37.00,
    "copay_specialist": 67.00,
    "out_of_pocket_max": 6850.00,
    "network_type": "HMO",
    "referral_required": true,
    "includes_prescription": true,
    "dental_coverage": false,
    "vision_coverage": false,
    "plan_url": "https://cigna.com/plans/hmo-value",
    "plan_notes": "Value HMO for individuals",
    "effective_date": "2025-01-01"
  },
  {
    "_id": 155,
    "plan_name": "Cigna HMO Plus",
    "plan_type": "HMO",
    "provider": "Cigna",
    "coverage_area": "New York",
    "monthly_premium": 480.00,
    "deductible": 1350.00,
    "coinsurance": "18% after deductible",
    "copay_primary": 31.00,
    "copay_specialist": 61.00,
    "out_of_pocket_max": 6600.00,
    "network_type": "HMO",
    "referral_required": true,
    "includes_prescription": true,
    "dental_coverage": false,
    "vision_coverage": false,
    "plan_url": "https://cigna.com/plans/hmo-plus",
    "plan_notes": "Plus plan with mental health coverage",
    "effective_date": "2025-01-01"
  },
  {
    "_id": 157,
    "plan_name": "Cigna Dental Value",
    "plan_type": "Dental",
    "provider": "Cigna",
    "coverage_area": "National",
    "monthly_premium": 27.00,
    "deductible": 110.00,
    "coinsurance": "70% after deductible",
    "copay_primary": 21.00,
    "copay_specialist": 31.00,
    "out_of_pocket_max": 1050.00,
    "network_type": "Dental",
    "referral_required": false,
    "includes_prescription": false,
    "dental_coverage": true,
    "vision_coverage": false,
    "plan_url": "https://cigna.com/dental/value",
    "plan_notes": "Covers preventive care",
    "effective_date": "2025-01-01"
  },
  {
    "_id": 158,
    "plan_name": "Cigna Dental Elite",
    "plan_type": "Dental",
    "provider": "Cigna",
    "coverage_area": "Texas",
    "monthly_premium": 42.00,
    "deductible": 60.00,
    "coinsurance": "85% after deductible",
    "copay_primary": 14.00,
    "copay_specialist": 24.00,
    "out_of_pocket_max": 1550.00,
    "network_type": "Dental",
    "referral_required": false,
    "includes_prescription": false,
    "dental_coverage": true,
    "vision_coverage": false,
    "plan_url": "https://cigna.com/dental/elite",
    "plan_notes": "Elite plan with adult orthodontics",
    "effective_date": "2025-01-01"
  }
  // ... (repeat for all other plans, truncated for brevity)
]

const CustomerhealthplansData = [
  {
    "_id": 1,
    "customer_id": 1,
    "plan_id": 151,
    "enrollment_date": "2025-01-05",
    "status": "active"
  },
  {
    "_id": 2,
    "customer_id": 2,
    "plan_id": 153,
    "enrollment_date": "2025-01-15",
    "status": "active"
  },
  {
    "_id": 3,
    "customer_id": 3,
    "plan_id": 154,
    "enrollment_date": "2025-01-20",
    "status": "terminated"
  },
  {
    "_id": 4,
    "customer_id": 4,
    "plan_id": 155,
    "enrollment_date": "2025-02-01",
    "status": "active"
  },
  {
    "_id": 5,
    "customer_id": 5,
    "plan_id": 157,
    "enrollment_date": "2025-02-10",
    "status": "pending"
  },
  {
    "_id": 6,
    "customer_id": 2,
    "plan_id": 152,
    "enrollment_date": "2025-03-01",
    "status": "active"
  },
  {
    "_id": 7,
    "customer_id": 3,
    "plan_id": 158,
    "enrollment_date": "2025-03-05",
    "status": "active"
  }
]

export const StoreContext = createContext({});

export const StoreProvider = ({ children }: any) => {
    const [loggedinUser, setLoggedinUser] = useState({});
    const [customersData, setCustomersData] = useState([])
    const [healthplansData, setHealthplansData] = useState(HealthplansData)
    const [customerhealthplansData, setCustomerhealthplansData] = useState(CustomerhealthplansData)
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [metadata, setMetadata] = useState({});

    const setUser = (data:any) => {
        setLoggedinUser(data)
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

    const handleContextSubmit = (data:any, key:number) => {
        setMetadata(prevdata => ({
            ...prevdata,
            [key]: data
        }))
    }

    const getAllData = () => {
        fetchData()
    }


    return (<StoreContext.Provider value ={{
        customersData,
        healthplansData, customerhealthplansData, loggedinUser, setUser, handleContextSubmit, getAllData
    }}>
        {children}
    </StoreContext.Provider>);
}


