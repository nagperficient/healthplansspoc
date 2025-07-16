import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './HomeFooter.css';

const HomeFooter = () => (
  <footer className="footer">
    <Container>
      {/* Copyright */}
      <Row>
        <Col xs="12" className="text-left copyright">
          ©2025 Cigna Healthcare. All rights reserved.
        </Col>
      </Row>

      {/* Link columns */}
      <Row className="footer-links">
        <Col md="4">
          <ul className="list-unstyled d-flex flex-column">
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Legal</a></li>
            <li><a href="#">Product Disclosures</a></li>
          </ul>
        </Col>
        <Col md="4">
          <ul className="list-unstyled d-flex flex-column">
            <li><a href="#">Company Names</a></li>
            <li><a href="#">Customer Rights</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Non‑Discrimination Notice</a></li>
          </ul>
        </Col>
        <Col md="4">
          <ul className="list-unstyled d-flex flex-column">
            <li><a href="#">Language Assistance [PDF]</a></li>
            <li><a href="#">Report Fraud</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Washington Consumer Health Data Privacy Notice</a></li>
          </ul>
        </Col>
      </Row>

      <hr className="footer-divider" />

      {/* Disclaimer */}
      <Row>
        <Col>
          <div className="disclaimer">
            <p>
              Individual and family medical and dental insurance plans are insured by Cigna Health and Life Insurance Company (CHLIC), Cigna HealthCare of Arizona, Inc., Cigna HealthCare of Florida, Inc., Cigna HealthCare of Georgia, Inc., Cigna HealthCare of Illinois, Inc., Cigna HealthCare of North Carolina, Inc., and Cigna HealthCare of Texas, Inc. Group health insurance and health benefit plans are insured or administered by CHLIC, Connecticut General Life Insurance Company (CGLIC), or their affiliates (see a <a href="#">listing of the legal entities</a> that insure or administer group HMO, dental HMO, and other products or services in your state). Accidental Injury, Critical Illness, and Hospital Care plans or insurance policies are distributed exclusively by or through operating subsidiaries of The Cigna Group Corporation, are administered by Cigna Health and Life Insurance Company, and are insured by either (i) Cigna Health and Life Insurance Company (Bloomfield, CT). The Cigna Healthcare name, logo, and other Cigna Healthcare marks are owned by The Cigna Group Intellectual Property, Inc.
            </p>
            <p>
              All insurance policies and group benefit plans contain exclusions and limitations. For availability, costs and complete details of coverage, contact a licensed agent or Cigna Healthcare sales representative. This website is not intended for residents of New Mexico.
            </p>
            <p className="external-note">
              <span aria-hidden="true">↗</span>&nbsp;
              Selecting these links will take you away from Cigna.com to another website, which may be a non‑Cigna Healthcare website. Cigna Healthcare may not control the content or links of non‑Cigna Healthcare websites. <a href="#">Details</a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default HomeFooter;
