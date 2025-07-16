import React from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import './LoginScreen.css';
import { logoWhite } from '../../utils/Images';

const LoginScreen = () => (
  <Container fluid className="login-container p-0">
    <Row noGutters className="min-vh-100">
      {/* Left panel with background image, logo & quote */}
      <Col md="6" className="login-left d-flex flex-column justify-content-between">
        <div className="p-4">
          <img
            src={logoWhite}
            alt="Cigna"
            className="logo"
          />
        </div>

        <div className="quote p-4">
          <h5>“Simply all the tools that my team and I need.”</h5>
          <p className="author">
            Karen, Yue<br/>
            <small>Director of Digital Marketing Technology</small>
          </p>
        </div>
      </Col>

      {/* Right panel with login form */}
      <Col
        md="6"
        className="login-right d-flex align-items-center justify-content-center"
      >
        <div className="login-form">
          <h2>Welcome back to Cigna</h2>
          <p className="subtitle">
            Build your design system effortlessly with our powerful component library.
          </p>

          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="alex.jordan@gmail.com"
              />
            </FormGroup>

            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
              />
              <a href="#" className="forgot-link">Forgot password?</a>
            </FormGroup>

            <FormGroup className="remember-switch form-check form-switch">
              <Input
                type="checkbox"
                id="rememberMe"
                className="form-check-input"
              />
              <Label for="rememberMe" className="form-check-label">
                Remember sign in details
              </Label>
            </FormGroup>

            <Button color="primary" className="login-btn">
              Log in
            </Button>
          </Form>

          <div className="divider">
            <hr/>
            <span>OR</span>
            <hr/>
          </div>

          {/* <Button outline className="google-btn">
            <img
              src={logoWhite}
              alt="Google"
            />
            Continue with Google
          </Button> */}

          <p className="signup">
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </div>
      </Col>
    </Row>
  </Container>
);

export default LoginScreen;
