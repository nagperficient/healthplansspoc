import React, { use, useState } from 'react';
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
import { toast } from 'react-toastify';
import { StoreContext } from '../../hooks/contexts/GlobalContext';
import apiService from '../../api/apiService';
import { LoaderIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUserData } from '../../hooks/contexts/UserContext';
const userRoles = [
  {
    first_name: 'Natashia',
    last_name: 'Khaleira',
    date_of_birth: '12-10-1990',
    email: 'admin@cigna.com',
    phone: '(+62) 821 2554-5846',
    role: 'admin',
    password: "cigna@8",
    address: "456 Oak St, Miami, FL",
    city: 'Leeds, East London',
    postalCode: 'ERT 1254',
    location: 'Leeds, United Kingdom',
    avatarUrl: '/path/to/avatar.jpg',
    _id: 1
  },
  {
    firstName: 'Jekovich',
    lastName: 'Remson',
    dob: '12-10-1991',
    email: 'user@cigna.com',
    phone: '(+62) 821 2554-5846',
    role: 'user',
    password: "cigna@8",
    country: 'United Kingdom',
    city: 'Leeds, East London',
    postalCode: 'ERT 1254',
    location: 'Leeds, United Kingdom',
    avatarUrl: '/path/to/avatar.jpg',
    _id: 3
  }
]
const LoginScreen = () => {
  const { updateUserData } = useUserData();
  const navigate = useNavigate();
  const { setUser } = use(StoreContext) as any
  const [formValues, setFormValues] = useState({}) as any;
  const [cusData, setCusData] = useState({})
  const [loading, setLoading] = useState(false);


  const handleOnChange = (e: any) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmitUserData = (data, key) => {
    setCusData(prevData => ({
      ...prevData,
      [key]: data
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const data = await apiService.get(`/email/${formValues.email}`)
    // console.log(data)
    // data.then(val=> console.log(val.data))
    // console.log(data,"user profiled data")

    const fetchUserData = async () => {


      setLoading(true); // Show loader

      try {
        const profileRes = await fetch(`http://10.99.34.31:8085/email/${formValues.email}`);
        // const profileRes = await fetch('https://jsonplaceholder.typicode.com/users');
        const profileData = await profileRes.json();
        updateUserData('profile', {...profileData,role:"user"});

        const plansRes = await fetch(`http://10.99.34.31:8085/cust_health_plans/by-customer/${profileData.id}`);
        // const plansRes = await fetch('https://jsonplaceholder.typicode.com/posts');
        const plansData = await plansRes.json();
        updateUserData('plans', plansData);

        const planIds = plansData.map(plan => plan.plan_id).join(",");
        const planDetailsRes = await fetch(`http://10.99.34.31:8085/health_plans/${planIds}`);
        // const planDetailsRes = await fetch(`https://jsonplaceholder.typicode.com/albums`);
        const planDetailsData = await planDetailsRes.json();
        updateUserData('planDetails', planDetailsData);
        navigate('/profile');
        console.log(planDetailsData);
      } catch (error) {
        console.log(error)
        toast.error("Invalid Credentials")
      } finally {
        setLoading(false); // Hide loader
      }




    }

    if (formValues.email === "admin@cigna.com") {
      const user = userRoles.find(
        (u) => u.email === formValues.email && u.password === formValues.password
      );

      if (user) {
        await Promise.resolve().then(() => {
          localStorage.setItem("userData", JSON.stringify({profile:{ ...user, password: "denied" }}))
          setUser({ ...user, password: "denied" })
        });
        navigate("/profile")
      } else {
        toast.error("Invalid Credentials")
      }
    } else {
        fetchUserData()
    }


    





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
            <h2>Welcome back to Cigna</h2>
            <p className="subtitle">
              Build your personal health care <strong className='text-success'>Journey</strong> and
              <strong className='text-primary'> Empowering</strong> you to make informed choices for a healthier tomorrow.
            </p>

            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                  value={formValues?.email}
                  onChange={handleOnChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  value={formValues?.password}
                  onChange={handleOnChange}
                />
                {/* <a href="#" className="forgot-link">Forgot password?</a> */}
              </FormGroup>

              {/*  <FormGroup className="remember-switch form-check form-switch">
              <Input
                type="checkbox"
                id="rememberMe"
                className="form-check-input"
              />
              <Label for="rememberMe" className="form-check-label">
                Remember sign in details
              </Label>
            </FormGroup> */}

              <Button color="primary" className="login-btn" type="submit" disabled={loading}>
                {loading ? <LoaderIcon className='spinner' /> : "Log in"}
              </Button>
            </Form>

            {/* <div className="divider">
            <hr/>
            <span>OR</span>
            <hr/>
          </div> */}

            {/* <Button outline className="google-btn">
            <img
              src={logoWhite}
              alt="Google"
            />
            Continue with Google
          </Button> */}

            {/* <p className="signup">
            Don't have an account? <a href="#">Sign up</a>
          </p> */}
          </div>
        </Col>
      </Row>
    </Container>
  )
};

export default LoginScreen;
