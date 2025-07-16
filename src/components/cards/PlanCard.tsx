import React from 'react';
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  Input,
  Label
} from 'reactstrap';
import './PlanCard.css';

const PlanCard = () => (
  <Card className="plan-card">
    <CardBody>

      {/* Title & rating */}
      <a href="#" className="plan-title">
        Cigna True Choice Courage Medicare (PPO)
      </a>
      <div className="plan-number">H7849-086-000</div>

      <div className="star-rating mb-3">
        <i className="fa fa-star filled" />
        <i className="fa fa-star filled" />
        <i className="fa fa-star filled" />
        <i className="fa fa-star-half-alt filled" />
        <i className="fa fa-star" />
        <span className="rating-text">
          Star Rating <i className="fa fa-question-circle info-icon" />
        </span>
      </div>

      {/* Premium banner */}
      <div className="premium-banner text-center mb-4">
        <div className="premium-label">Monthly premium:</div>
        <div className="premium-value">$0.00</div>

        <div className="premium-buttons mt-3">
          <Button outline color="light" className="btn-sm">
            View details
          </Button>
          <Button color="light" className="btn-sm enroll-btn ms-2">
            Enroll in this plan
          </Button>
        </div>
      </div>

      {/* Benefits list */}
      <div className="benefits-section mb-4">
        <div className="benefits-title">Medical coverage and extra benefits:</div>
        <ul className="benefits-list">
          <li><i className="fa fa-check-circle text-success" /> Part B Giveback</li>
          <li><i className="fa fa-times-circle text-danger" /> Prescription drugs</li>
          <li><i className="fa fa-check-circle text-success" /> Dental</li>
          <li><i className="fa fa-check-circle text-success" /> Vision</li>
          <li><i className="fa fa-check-circle text-success" /> Hearing</li>
          <li><i className="fa fa-times-circle text-danger" /> Over‑the‑counter drugs</li>
          <li><i className="fa fa-times-circle text-danger" /> Fitness programs</li>
        </ul>
      </div>

      <hr />

      {/* Copay grid */}
      <Row className="copay-section mb-3">
        <Col xs="6">
          <div className="copay-label">Primary care copay</div>
          <div className="copay-value">$0 copay per visit</div>
        </Col>
        <Col xs="6">
          <div className="copay-label">Specialist copay</div>
          <div className="copay-value">$40 copay per visit</div>
        </Col>
      </Row>

      {/* Note banner */}
      <div className="note-banner mb-3">
        Doesn’t include drug coverage
      </div>

      {/* Compare Plan */}
      <div className="d-flex align-items-center compare-plan">
        <Input type="checkbox" id="comparePlan" />
        <Label for="comparePlan" className="mb-0 ms-2">
          Compare Plan
        </Label>
      </div>

    </CardBody>
  </Card>
);

export default PlanCard;
