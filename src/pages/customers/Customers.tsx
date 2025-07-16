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
} from 'reactstrap';

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
  const [modal, setModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const toggleModal = () => setModal(!modal);

  const handleViewProfile = (customer) => {
    setSelectedCustomer(customer);
    toggleModal();
  };

  return (
    <div className="container mt-4">
      <Row>
        {customersdata.map((customer) => (
          <Col sm="12" md="6" lg="4" className="mb-4" key={customer._id}>
            <Card style={{ width: '100%' }}>
              <img
                alt="Customer"
                src="https://picsum.photos/300/200"
              />
              <CardBody>
                <CardTitle tag="h5">
                  {customer.first_name} {customer.last_name}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {customer.email}
                </CardSubtitle>
                <CardText>
                  <strong>DOB:</strong> {customer.date_of_birth}<br />
                  <strong>Address:</strong> {customer.address}
                </CardText>
                <Button color="primary" onClick={() => handleViewProfile(customer)}>
                  View Profile
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    
    </div>
  );
}

export default Customers;
