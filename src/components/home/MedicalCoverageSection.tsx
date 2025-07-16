import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './MedicalCoverageSection.css';

const MedicalCoverageSection = ({ imageSrc }) => (
  <section className="medical-section py-5">
    <Container>
      <Row className="align-items-center">
        {/* Text column */}
        <Col lg="6" className="medical-content">
          <h2 className="medical-title">
            Buying Medical Coverage<br/>
            On Your Own?
          </h2>
          <p className="medical-intro">
            Cigna Healthcare<sup>SM</sup> offers quality plan options, personalized support, and low costs.
          </p>
          <ul className="medical-list">
            <li>
              Plans offer virtual care starting at $0<sup>3</sup> and come with $0 preventive care<sup>4</sup>
            </li>
            <li>Financial assistance available, if you qualify</li>
            <li>Additional coverage for diabetes and asthma/COPD, if needed</li>
            <li>Available for shopping during Open Enrollment (Nov 1–Dec 15, in most states)</li>
          </ul>
          <Button color="link" className="medical-link p-0">
            See what Cigna Healthcare offers&nbsp;<span aria-hidden>→</span>
          </Button>
        </Col>

        {/* Image column */}
        <Col lg="6" className="medical-image position-relative p-0">
          {/* <div className="leaf leaf-large" />
          <div className="leaf leaf-small" /> */}
          <img
            src={imageSrc}
            alt="Person smiling"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  </section>
);

export default MedicalCoverageSection;
