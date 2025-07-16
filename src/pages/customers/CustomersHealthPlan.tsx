import React, { useState } from 'react';
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

//healthplans

const healthplansdata = [
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
  const [modal, setModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const toggleModal = () => setModal(!modal);

  const handleViewPlan = (id) => {
    const customer = healthplansdata.find(c => c._id === id);
    setSelectedCustomer(customer);
    setModal(true);
  };

  return (
    <div className="container mt-4">
        <h1>Health Plans</h1>
        <br/>
      <Row>
        {customerdata.map((plan) => (
          <Col sm="12" md="6" lg="4" className="mb-4" key={plan?._id}>
            <Card style={{ width: '100%' }}>
              <img alt="Health Plan" src="https://picsum.photos/300/200" />
              <CardBody>
                <CardTitle tag="h5">Plan ID: {plan.plan_id}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">Customer ID: {plan.customer_id}</CardSubtitle>
                <CardText>
                  <strong>Enrollment Date:</strong> {plan.enrollment_date}<br />
                  <strong>Status:</strong> {plan.status}
                </CardText>
                <Button color="primary" onClick={() => handleViewPlan(plan.plan_id)}>
                  View Plan
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modalpopup place here */}

    </div>
  );
}

export default CustomersHealthPlan;
