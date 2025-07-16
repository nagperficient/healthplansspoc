import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const healthPlanData = [
  {
    "_id": 1, "customer_id": 1, "plan_id": 151, "enrollment_date": "2025-01-05", "status": "active"
  },
  {
    "_id": 2, "customer_id": 2, "plan_id": 153, "enrollment_date": "2025-01-15", "status": "active"
  },
  {
    "_id": 3, "customer_id": 3, "plan_id": 154, "enrollment_date": "2025-01-20", "status": "terminated"
  },
  {
    "_id": 4, "customer_id": 4, "plan_id": 155, "enrollment_date": "2025-02-01", "status": "active"
  },
  {
    "_id": 5, "customer_id": 5, "plan_id": 157, "enrollment_date": "2025-02-10", "status": "pending"
  },
  {
    "_id": 6, "customer_id": 2, "plan_id": 152, "enrollment_date": "2025-03-01", "status": "active"
  },
  {
    "_id": 7, "customer_id": 3, "plan_id": 158, "enrollment_date": "2025-03-05", "status": "active"
  }
];

const CustomerModal = ({ isOpen, toggle, planId }) => {
  const plan = healthPlanData.find(p => p.plan_id === planId);

  if (!plan) return null;

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Plan Details</ModalHeader>
      <ModalBody>
        <p><strong>Plan ID:</strong> {plan.plan_id}</p>
        <p><strong>Customer ID:</strong> {plan.customer_id}</p>
        <p><strong>Enrollment Date:</strong> {plan.enrollment_date}</p>
        <p><strong>Status:</strong> {plan.status}</p>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>Close</Button>
      </ModalFooter>
    </Modal>
  );
};

export default CustomerModal;
