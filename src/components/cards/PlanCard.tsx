import React from 'react';
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  Input,
  Label,
  CardHeader
} from 'reactstrap';
import './PlanCard.css';
import { CheckCircle, Pen, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const PlanCard = (props) => {
  const plan = props
  let navigate = useNavigate();
  return (
    <Card className="plan-card">
      <div className="right-more-dots text-right">
        <Button size='sm' color="link" onClick={() => plan.editPlan(plan._id)}>
          <Pen size={12} />
        </Button>
      </div>
      <CardBody className="p-0">

        {/* Title & rating */}
        <a href={plan?.plan_url} className="plan-title pb-3">
          {plan?.plan_name} ({plan?.plan_type})
        </a>
        {plan?.plan_number && <div className="plan-number">{plan?.plan_type}</div>}
        {plan?.plan_rating && <div className="star-rating mb-3">
          <i className="fa fa-star filled" />
          <i className="fa fa-star filled" />
          <i className="fa fa-star filled" />
          <i className="fa fa-star-half-alt filled" />
          <i className="fa fa-star" />
          <span className="rating-text">
            Star Rating <i className="fa fa-question-circle info-icon" />
          </span>
        </div>}

        {/* Premium banner */}
        <div className="premium-banner text-center mb-4">
          <div className="premium-label">Monthly premium:</div>
          <div className="premium-value">${plan?.monthly_premium.toFixed(2)}</div>

          <div className="premium-buttons mt-3">
            <Button outline color="light" className="btn-sm btn-hover-primary" onClick={()=>navigate(`/customers/healthplan/${plan._id}/${plan.plan_name}`)}>
              View details
            </Button>
            <Button color="light" className="btn-sm enroll-btn ms-2" onClick={plan.entrollPlan}>
              Enroll in this plan
            </Button>
          </div>
        </div>

        {/* Benefits list */}
        <div className="benefits-section mb-4">
          <div className="benefits-title">Medical coverage and extra benefits:</div>
          <ul className="benefits-list">

            <li>
              {plan?.includes_prescription ? (
                <CheckCircle className="text-success me-2" size={16} />
              ) : (
                <XCircle className="text-danger me-2" size={16} />
              )}
              {' '}Prescription drugs
            </li>


            <li>
              {plan?.dental_coverage ? (
                <CheckCircle className="text-success me-2" size={16} />
              ) : (
                <XCircle className="text-danger me-2" size={16} />
              )} Dental
            </li>
            <li>
              {plan?.vision_coverage ? (
                <CheckCircle className="text-success me-2" size={16} />
              ) : (
                <XCircle className="text-danger me-2" size={16} />
              )} Vision
            </li>
            {!plan?.hearing_coverage == undefined && <li>
              {plan?.hearing_coverage ? (
                <CheckCircle className="text-success me-2" size={16} />
              ) : (
                <XCircle className="text-danger me-2" size={16} />
              )} Hearing
            </li>}

            {!plan?.over_the_counter_drugs_coverage == undefined && <li>
              {plan?.over_the_counter_drugs_coverage ? (
                <CheckCircle className="text-success me-2" size={16} />
              ) : (
                <XCircle className="text-danger me-2" size={16} />
              )}  Over-the-counter drugs
            </li>
            }
            {!plan.fitness_programs_coverage == undefined && <li>
              {plan?.fitness_programs_coverage ? (
                <CheckCircle className="text-success me-2" size={16} />
              ) : (
                <XCircle className="text-danger me-2" size={16} />
              )} Fitness coverage
            </li>}


          </ul>
        </div>

        <hr />

        {/* Copay grid */}
        <Row className="copay-section mb-3">
          <Col xs="6">
            <div className="copay-label">Primary care copay</div>
            <div className="copay-value">${plan?.copay_primary} copay per visit</div>
          </Col>
          <Col xs="6">
            <div className="copay-label">Specialist copay</div>
            <div className="copay-value">${plan?.copay_specialist} copay per visit</div>
          </Col>
        </Row>

        {/* Note banner */}
        {!plan?.includes_prescription ? (
          <div className="note-banner">
            Doesn't include Prescription
          </div>
        ) : <div className="note-banner">
          Includes Prescription
        </div>}

        {/* Compare Plan */}
        {/* <div className="d-flex align-items-center compare-plan">
          <Input type="checkbox" id={`comparePlan-${plan?._id}`} />
          <Label for={`comparePlan-${plan?._id}`} className="mb-0 ms-2">
            Compare Plan
          </Label>
        </div> */}

      </CardBody>
    </Card>

  )
};

export default PlanCard;
