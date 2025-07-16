import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './WelcomeBanner.css'

const WelcomeBanner = () => (
  <section className="welcome-banner">
    {/* 
      - min-vh-100 makes the Container at least 100% of the viewport height 
      - d-flex + align-items-center vertically centers its children 
    */}
    <Container
      fluid
      className="min-vh-100 d-flex align-items-center"
    >
      <Row className="w-100">
        <Col md="6" className="welcome-text text-white">
          <h5 className="greeting">Good Evening! 🌙</h5>
          <h1 className="title">Welcome to Cigna Healthcare</h1>
          <p className="subtitle">
            We offer a wide range of insurance plans and products that focus on all  
            aspects of your well-being—physical and emotional.
          </p>
        </Col>
      </Row>
    </Container>
  </section>
)

export default WelcomeBanner
