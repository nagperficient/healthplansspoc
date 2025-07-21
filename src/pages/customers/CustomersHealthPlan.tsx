import React, { use, useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import CustomerModal from '../../components/modalPopups/CustomerModal';
import HealthPlansModal from '../../components/modalPopups/HealthPlansModal';
import SummaryPlanCard from '../../components/cards/SummaryPlanCard';
import PlanCard from '../../components/cards/PlanCard';
import { toast } from 'react-toastify';
import { StoreContext } from '../../hooks/contexts/GlobalContext';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../../hooks/contexts/UserContext';

//healthplans

const healthplansdatas = [
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
]

// Health plan data
const customerdata = [
  { _id: 1, customer_id: 1, plan_id: 151, enrollment_date: "2025-01-05", status: "active" },
  { _id: 2, customer_id: 2, plan_id: 153, enrollment_date: "2025-01-15", status: "active" },
  { _id: 3, customer_id: 3, plan_id: 154, enrollment_date: "2025-01-20", status: "terminated" },
  { _id: 4, customer_id: 4, plan_id: 155, enrollment_date: "2025-02-01", status: "active" },
  { _id: 5, customer_id: 5, plan_id: 157, enrollment_date: "2025-02-10", status: "pending" },
  { _id: 6, customer_id: 2, plan_id: 152, enrollment_date: "2025-03-01", status: "active" },
  { _id: 7, customer_id: 3, plan_id: 158, enrollment_date: "2025-03-05", status: "active" }
];

function CustomersHealthPlan() {
  const navigate = useNavigate()
  const [modal, setModal] = useState(true);
  const userContent = JSON.parse(localStorage.getItem("userData") || "{}").profile as any;
  const userPlans = JSON.parse(localStorage.getItem("userData") || "{}").planDetails as any;
  const { healthplansData, customerhealthplansData } = use(StoreContext)
  const { planDetails } = use(UserDataContext)
  const [healthPlans, setHealthPlans] = useState([]);
  const { isAuthenticated, isLoading } = useAuth()
  const [selectedCustomer, setSelectedCustomer] = useState<null | any>(null);
  const [selectedPlan, setSelectedPlan] = useState<null | any>(null);
  const [showMore, setShowMore] = useState(false)

  const toggleModal = () => { setModal(!modal); setSelectedPlan("") };

  const handleUpdatePlan = () => {
    setModal(true);
  }

  useEffect(() => {
    if (selectedPlan) {
      handleUpdatePlan()

    }
  }, [selectedPlan])

  const accessPlanDenied = () => {
    toast.error("Enrollment is disabled.")
  }

  const editHealthPlan = (planId: string) => {
    
    setSelectedPlan(planId)
   // handleContextSubmit(,"profile")
    
  }
  useEffect(() => {

    if (isAuthenticated) {
      if (userContent.role === "user") {
        const selectedPlans = customerhealthplansData.filter(plan => +plan.customer_id === +userContent.id).map(val => +val.plan_id);
        const updatedHealthPlans = healthplansData.filter(plan => selectedPlans.includes(+plan.id))
        setHealthPlans(updatedHealthPlans)
        // setHealthPlans(userPlans)
      }
    }
    return () => {

    }
  }, [isAuthenticated])

  if (isLoading) {
    return <div>Loading..</div>
  } else if (!isAuthenticated) {
    navigate("/login")
  }
  if (!isAuthenticated) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center justify-content-between">
        <h4 className="my-3">Health Plans</h4>
        {userContent.role === "user" && <Button outline color='primary' className='rounded-pill' onClick={()=>setShowMore(!showMore)}>{showMore ? "Subscribed plans":"Show all plans"}</Button>}
      </div>

      <br />
      <Row>
        {((userContent.role === "user" && !showMore) ? (planDetails||healthPlans) : healthplansData)?.map((plan) => (
          <Col sm="12" md="6" lg="4" className="mb-4" key={plan?.id}>

            <PlanCard
              // plan_name={plan.plan_name}
              // plan_type={plan.plan_type}
              // provider={plan.provider}
              // coverage_area={plan.coverage_area}
              // monthly_premium={plan.monthly_premium}
              // deductible={plan.deductible}
              // coinsurance={plan.coinsurance}
              // copay_primary={plan.copay_primary}
              // copay_specialist={plan.copay_specialist}
              // out_of_pocket_max={plan.out_of_pocket_max}
              // network_type={plan.network_type}
              // referral_required={plan.referral_required}
              // includes_prescription={plan.includes_prescription}
              // dental_coverage={plan.dental_coverage}
              // vision_coverage={plan.vision_coverage}
              // plan_url={plan.plan_url}
              // plan_notes={plan.plan_notes}
              // effective_date={plan.effective_date}
              userRole={userContent.role}
              editPlan={editHealthPlan}
              entrollPlan={accessPlanDenied}
              {...plan}
            />

          </Col>
        ))}
      </Row>

      {/* Modalpopup place here */}
      {/* <CustomerModal isOpen={modal} toggle={() => setModal(!modal)} planId={selectedCustomer} /> */}
      {selectedPlan && <HealthPlansModal isOpen={modal} toggle={toggleModal} planId={selectedPlan} />}
    </div>
  );
}

export default CustomersHealthPlan;
