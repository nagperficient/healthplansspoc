import { Container, Row, Col, Button } from 'reactstrap';
import './InclusionSection.css';
import { customerLogo } from '../../utils/Images';

const InclustionSection = () => (
  <section className="inclusion-section">
    <Container fluid className="p-0">
      <Row noGutters>
        {/* Left text panel */}
        <Col md="6" className="inclusion-content d-flex flex-column justify-content-center">
          <h2 className="title">
            Our commitment to<br/>
            inclusion
          </h2>
          <p className="lead">
            We empower healthier decisions for everyone, no matter race, ethnicity,
            nationality, gender, veteran status, ability, sexual orientation,
            gender identity, and more. Our diverse perspectives and different ways
            of thinking guide our commitment to customers, clients, and colleagues
            in new ways.
          </p>
          <Button color="link" className="learn-more p-0">
            Learn more about our inclusion commitment&nbsp;<span aria-hidden>→</span>
          </Button>
        </Col>

        {/* Right image panel */}
        <Col md="6" className="inclusion-image p-0 position-relative">
          <img
            src={customerLogo}
            alt="Smiling person holding a dog"
            className="img-fluid"
          />
          <button type="button" className="feedback-btn">
            Feedback
          </button>
        </Col>
      </Row>
    </Container>
  </section>
);

export default InclustionSection;
