import React, { Fragment } from 'react';
import { Card, CardBody, Row, Col, Button } from 'reactstrap';
import { Star, StarHalf } from "lucide-react";
import './SummaryPlanCard.css';
import { toast } from 'react-toastify';

const SummaryPlanCard = (props: any) => {
  const { _id, plan_name, plan_type, provider, coverage_area, monthly_premium, deductible, coinsurance, copay_primary, copay_specialist, out_of_pocket_max, network_type, referral_required, includes_prescription, dental_coverage, vision_coverage, plan_url, plan_notes, effective_date } = props;
  return (
    <Card className="summary-card mb-4 p-0">
      <CardBody className='bg-light p-5 m-0'>
        {/* Title & Rating */}
        <div className="d-flex flex-column align-items-start justify-content-start mb-3">
          <h4 className="card-title mb-0">
            {plan_name} ({plan_type})
          </h4>
          <div className="star-rating my-3">
            {Array.from({ length: 3 }, (val, index) => (
              <Fragment key={index}>
                {index < 2 ? <Star fill="#f5a623" strokeWidth={0} /> : <Star fill="#111" strokeWidth={0} />}
              </Fragment>
            ))}

            
          </div>

        </div>
      </CardBody>
      <CardBody>

        {/* Metrics Row */}
        <Row className="text-left metrics-row mb-4 px-3">
          <Col md="4" className="metric">
            <div className="metric-label">Monthly Premium</div>
            <div className="metric-value">${monthly_premium?.toFixed(2)}</div>
          </Col>
          <Col md="4" className="metric">
            <div className="metric-label">Medical Deductible</div>
            <div className="metric-value">${deductible?.toFixed(2)}</div>
          </Col>
          {/* <Col md="4" className="metric">
            <div className="metric-label">
              Total Est. Cost<br />
              <small className="metric-subtext">(For the remainder of 2025)</small>
            </div>
            <div className="metric-value">$0.00</div>
          </Col> */}
        </Row>

        {/* Enroll Button */}
        <div className="text-start">
          <Button color="primary" onClick={()=>toast.error("Enrollment is disabled.")}>Enroll in this plan</Button>
        </div>
      </CardBody>
    </Card>
  )
};

export default SummaryPlanCard;
