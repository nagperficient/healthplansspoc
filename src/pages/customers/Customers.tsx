import React, { use, useEffect, useMemo, useState } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Row,
  Col,
} from 'reactstrap';
import { StoreContext } from '../../hooks/contexts/GlobalContext';
import "./Customers.css"
import { user1, user2, user3, user4, user5, user6 } from '../../utils/Images';
import useAuth from '../../hooks/useAuth';
const customersdata = [
  {
    "_id": 1,
    "first_name": "Alice",
    "last_name": "Smith",
    "email": "alice.smith@email.com",
    "date_of_birth": "1985-03-15",
    "address": "123 Main St, Dallas, TX"
  },
  {
    "_id": 2,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.johnson@email.com",
    "date_of_birth": "1990-07-22",
    "address": "456 Oak St, Miami, FL"
  },
  {
    "_id": 3,
    "first_name": "Carol",
    "last_name": "Williams",
    "email": "carol.williams@email.com",
    "date_of_birth": "1978-11-02",
    "address": "789 Pine St, Los Angeles, CA"
  },
  {
    "_id": 4,
    "first_name": "David",
    "last_name": "Brown",
    "email": "david.brown@email.com",
    "date_of_birth": "1982-01-27",
    "address": "321 Maple St, New York, NY"
  },
  {
    "_id": 5,
    "first_name": "Eve",
    "last_name": "Davis",
    "email": "eve.davis@email.com",
    "date_of_birth": "1995-05-17",
    "address": "654 Cedar St, Atlanta, GA"
  }
];

function Customers() {
  const { customersData, customerhealthplansData} = use(StoreContext)
  const {isAuthenticated, isLoading} = useAuth();
  const [modal, setModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  
  const toggleModal = () => setModal(!modal);

  const handleViewProfile = (customer) => {
    setSelectedCustomer(customer);
    toggleModal();
  };
  
  const userPlans = (customerId) => useMemo(() => customerhealthplansData.filter(val => +val.customer_id === +customerId)?.map(plan=>plan.plan_id), [customerId])
  const profileImagesList = [user1, user2, user3, user4, user5, user6]
  if(isLoading){
    <div>Loading..</div>
  } else if(!isAuthenticated) {
    window.location.href="/login"
  }
 
  return (
    <div className="container mt-4">
      <h4 className="my-4">Customers</h4>
      <Row>
        {((customersData && customersData.length > 0) ? customersData:customersdata)?.map((customer) => (
          <Col sm="12" md="6" lg="4" className="mb-4" key={customer._id} style={{position:"relative",overflow:"hidden"}}>
            <Card style={{ width: '100%' }} className="customer-card p-0 ">
              <img
                alt="Customer"
                src={profileImagesList[Math.floor(Math.random() * 6)]}
                style={{objectFit:"cover", maxHeight:"190px"}}
              />
              <CardBody>
                <CardTitle tag="h5" style={{fontSize:"2rem"}}>
                  {customer.first_name} {customer.last_name}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {customer.email}
                </CardSubtitle>
                <CardText>
                  <strong>DOB:</strong> {customer.date_of_birth}<br />
                  <strong>Address:</strong> <span className='d-inline-block text-truncate' style={{maxWidth: "150px"}}>{customer.address}</span>
                  <div><strong>Subscribed Plans:</strong> {userPlans(customer._id).join(",")}</div>

                </CardText>
                {/* <Button color="primary" onClick={() => handleViewProfile(customer)}>
                  View Profile
                </Button> */}
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    
    </div>
  );
}

export default Customers;
