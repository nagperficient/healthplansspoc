import React, { Fragment } from 'react';
import { Card, CardBody, Row, Col, Button } from 'reactstrap';
import { Star, StarHalf } from "lucide-react";
import './SummaryPlanCard.css';

const SummaryPlanCard = () => (
  <Card className="summary-card mb-4 p-0">
    <CardBody className='bg-light p-5 m-0'>
      {/* Title & Rating */}
      <div className="d-flex flex-column align-items-start justify-content-start mb-3">
        <h4 className="card-title mb-0">
          Cigna True Choice Courage Medicare (PPO)
        </h4>
        <div className="star-rating">
          { Array.from({ length: 3 }, (val, index) => (
            <Fragment key={index}>
              {index < 2 ? <Star fill="#f5a623" strokeWidth={0} /> : <Star fill="#111" strokeWidth={0} />}
            </Fragment>
          ))}
          
          <div className="rating-label ms-2">
            Star Rating <i className="fa fa-question-circle info-icon"></i>
          </div>
        </div>
       
      </div>
      </CardBody>
      <CardBody>

      {/* Metrics Row */}
      <Row className="text-center metrics-row mb-4">
        <Col md="4" className="metric">
          <div className="metric-label">Monthly Premium</div>
          <div className="metric-value">$0.00</div>
        </Col>
        <Col md="4" className="metric">
          <div className="metric-label">Medical Deductible</div>
          <div className="metric-value">$500.00</div>
        </Col>
        <Col md="4" className="metric">
          <div className="metric-label">
            Total Est. Cost<br/>
            <small className="metric-subtext">(For the remainder of 2025)</small>
          </div>
          <div className="metric-value">$0.00</div>
        </Col>
      </Row>

      {/* Enroll Button */}
      <div className="text-start">
        <Button color="primary">Enroll in this plan</Button>
      </div>
    </CardBody>
  </Card>
);

export default SummaryPlanCard;
