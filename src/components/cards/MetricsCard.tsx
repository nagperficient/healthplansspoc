import React from 'react';
import {
  Card,
  CardBody,
  Row,
  Col,
  Progress
} from 'reactstrap';
import './MetricsCard.css';

const MetricsCard = () => (
  <Card className="metrics-card">
    <CardBody>
      {/* Header */}
      <Row className="align-items-center mb-3">
        <Col>
          <h6 className="card-title mb-0">
            query <span className="fw-bold">getUser</span> <i className="bi bi-chevron-right"></i>
          </h6>
          <small className="text-muted">
            7.15M Requests &bull; 9% &bull; 734 ms P95
          </small>
        </Col>
        <Col xs="auto">
          <i className="bi bi-three-dots-vertical text-muted"></i>
        </Col>
      </Row>

      {/* Top metrics */}
      <Row className="text-center mb-4">
        <Col xs="6">
          <div className="metric-label">Cache Hit Rate</div>
          <div className="metric-value text-primary">12.3%</div>
          <div className="metric-trend text-danger">
            <i className="bi bi-arrow-down-short"></i> down from 19.6%
          </div>
        </Col>
        <Col xs="6">
          <div className="metric-label">Max CHR</div>
          <div className="metric-value text-primary">72.6%</div>
          <div className="metric-trend">
            CHR Impact +5.4% <i className="bi bi-question-circle"></i>
          </div>
        </Col>
      </Row>

      <hr />

      {/* Bandwidth summary */}
      <Row className="align-items-center mb-2">
        <Col xs="8">
          <div className="bw-value">90.5 GB <span className="text-muted">(69.8%)</span></div>
          <small className="text-muted">Cacheable Bandwidth</small>
        </Col>
        <Col xs="4" className="text-end">
          <div className="cost">$9.50</div>
        </Col>
      </Row>

      {/* Multi‐segment progress bar */}
      <Progress multi className="bandwidth-progress mb-2">
        <Progress bar className="progress-purple" value={9.8} />
        <Progress bar className="progress-grey" value={20.3} />
        <Progress bar className="progress-light" value={69.8} />
      </Progress>

      {/* Legend */}
      <Row className="mb-2">
        <Col xs="6">
          <div className="d-flex align-items-center">
            <span className="legend-marker cached"></span>
            <small className="ms-2">Cached 12.8 GB (9.8%)</small>
          </div>
        </Col>
        <Col xs="6">
          <div className="d-flex align-items-center">
            <span className="legend-marker noncached"></span>
            <small className="ms-2">Non‑Cacheable 26.3 GB (20.3%)</small>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className="text-end">
          <small className="text-muted">Total 129.6 GB</small>
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default MetricsCard;
