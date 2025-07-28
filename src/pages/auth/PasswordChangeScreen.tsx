import { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert
} from 'reactstrap';
import './LoginScreen.css';
import { logoWhite } from '../../utils/Images';
import { LoaderIcon } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { BASEURL } from '../../api/axiosInstance';

const PasswordChangeScreen = () => {
  const [searchParms] = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [showAlert, setShowAlert] = useState({
    msg: "",
    variant: "",
    show: false
  })
  const email = searchParms.get("email");
  const otp = searchParms.get("otp")

  const [formData, setFormData] = useState({
    email: '',
    otp: '',
    validate_time: '',
    password:'',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date(); // or your date string
    const formattedDate = date.toISOString().slice(0, 19).replace('T', ' ');
    const data = { ...formData, email, validate_time: formattedDate }
    console.log('Form submitted:', data);
    setLoading(true)
    try {
      const resp = await fetch(`${BASEURL}/api/v1/user/validateOTP`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify(data)

        },

      )
      const respData = await resp.json();

      setShowAlert(prevData => ({
        ...prevData,
        msg: "Success Please check your email.",
        variant: "primary",
        show: true
      }))
      setLoading(false)
    } catch {
      setShowAlert(prevData => ({
        ...prevData,
        msg: "Something went wrong.",
        variant: "primary", // need to change later to danger
        show: true
      }))
      setLoading(false)
    }
    // Add your form submission logic here
  };
  const handleSubmitSetPassword = async (e) => {
    e.preventDefault();
    const date = new Date(); // or your date string
    const formattedDate = date.toISOString().slice(0, 19).replace('T', ' ');
    const data = { ...formData, email, validate_time: formattedDate }
    console.log('Form submitted:', data);
    setLoading(true)
    try {
      const resp = await fetch(`${BASEURL}/api/v1/user/setPassword`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify(data)

        })
      const respData = await resp.json();

      setShowAlert(prevData => ({
        ...prevData,
        msg: "Success Password is reset.",
        variant: "primary",
        show: true
      }))
      setLoading(false)
      window.location.href="/login"
    } catch {
      setShowAlert(prevData => ({
        ...prevData,
        msg: "Something went wrong.",
        variant: "danger",
        show: true
      }))
      setLoading(false)
    }
    // Add your form submission logic here
  };



  const handleToggleAlert = () => {
    setShowAlert(prevData => ({
      ...prevData,
      msg: "Success Please check your email.",
      variant: "danger",
      show: false
    }))
  }



  return (
    <Container fluid className="login-container p-0" style={{ width: "100%", height: "90vh" }}>

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

          <div className="quote p-4 text-white">
            <h5>“Simply all the tools that my team and I need.”</h5>
            <p className="author">
              Karen, Yue<br />
              <small>Director of Healthe Care Technology</small>
            </p>
          </div>
        </Col>

        {/* Right panel with login form */}
        <Col
          md="6"
          className="login-right d-flex align-items-center justify-content-center"
        >
          <div className="login-form">
            <Alert color={showAlert.variant} isOpen={showAlert.show} toggle={handleToggleAlert}>{showAlert.msg}</Alert>
            <h2>Welcome back to Cigna</h2>
            <p className="subtitle">
              Empowering you to make informed choices <strong className='text-success'>Empowering </strong> you
              <strong className='text-primary'> to make informed choices</strong>  for a healthier tomorrow starts with protecting your account.
            </p>


            {showAlert.variant !== "primary" ? <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                  value={email || ""}
                  disabled
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="otp">OTP</Label>
                <Input
                  type="text"
                  name="otp"
                  id="otp"
                  placeholder="Enter OTP"
                  value={formData.otp}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              {/* <FormGroup>
                <Label for="validate_time">Validation Time</Label>
                <Input
                  type="datetime-local"
                  name="validate_time"
                  id="validate_time"
                  value={formData.validate_time}
                  onChange={handleChange}
                  required
                />
              </FormGroup> */}


              <Button color="primary" className="login-btn" type="submit" disabled={loading}>
                {loading ? <LoaderIcon className='spinner' /> : "Validate otp"}
              </Button>
            </Form> :
              <Form onSubmit={handleSubmitSetPassword}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                    value={email || ""}
                    disabled
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>


                <Button color="primary" className="login-btn" type="submit" disabled={loading}>
                  {loading ? <LoaderIcon className='spinner' /> : "Reset"}
                </Button>
              </Form>
            }

          </div>
        </Col>
      </Row>
    </Container>
  )
};

export default PasswordChangeScreen;
