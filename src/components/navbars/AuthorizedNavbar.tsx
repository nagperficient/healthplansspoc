import React, { use, useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Container,
  Button,
  DropdownItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import "./HomeNavbar.css";
import { logoWhite } from "../../utils/Images";
import { Bell, User } from "lucide-react";
import AuthDropDown from "../dropdowns/AuthDropDown";
import { NavLink } from "react-router-dom";
import { StoreContext } from "../../hooks/contexts/GlobalContext";
import AlertModal from "../modalPopups/AlertModal";
const data2= {
        "event_type": "update",
        "benefit_event_id": {
            "$oid": "6878917b80624116cd005593"
        },
        "changed_fields": {
            "provider": "traCigna"
        },
        "benefit_event_data": {
            "_id": {
                "$oid": "6878917b80624116cd005593"
            },
            "id": 153,
            "plan_name": "Cigna PPO Select",
            "plan_type": "PPO",
            "provider": "traCigna",
            "fields": {
                "includes_prescription": true,
                "dental_coverage": true,
                "vision_coverage": true,
                "deductible": 1000
            },
            "event_message": "Dental & Vision coverage is enabled !!"
        },
        "customer_health_plan": {
            "_id": 2,
            "customer_id": 2,
            "plan_id": 153,
            "enrollment_date": "2025-01-15",
            "status": "active"
        },
        "associated_customers": [
            {
                "customer_id": 2,
                "customer_data": {
                    "id": 2,
                    "first_name": "Bob",
                    "last_name": "Johnson",
                    "email": "bob.johnson@email.com",
                    "date_of_birth": "1990-07-22",
                    "address": "456 Oak St, Miami, FL"
                }
            }
        ]
    }
const AuthorizedNavbar = () => {
  const { setEventMessages, eventMessages } = use(StoreContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [showAlert, setShowAlert] = useState(true);
  useEffect(() => {
     const socket = new WebSocket('ws://10.99.34.198:808/ws/customer-events');
    //  const socket = new WebSocket('ws://10.99.34.105:8080/ws/customer-events');
    socket.onopen = () => {
      console.log("socket established")
    }
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const extractedDat = data.customerNotification;
      console.log("socket established", data)
      // show toast or do whatever with data
      setEventMessages(extractedDat)
    };
  }, [])
  

  return (
    <Navbar light expand="lg" className="main-navbar shadow-sm">
      <Container fluid>
        <div className="d-flex align-items-center justify-content-between">
          <NavbarBrand href="/">
            {/* swap in your real logo path */}
            <img
              src={logoWhite}
              alt="Cigna Healthcare"
              className="cigna-logo"
            />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className="justify-content-end">
            <Nav className="mr-auto align-items-center" navbar>
              <div className="d-flex align-items-center justify-content-between">
                <NavItem>
                <NavLink to="/customers/healthplan" className="nav-link">
                  <span className="text-dark">For</span> <span className="highlight">Medicare</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/customers" className="nav-link">
                  For <span className="highlight">Customers</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <button onClick={()=>setEventMessages(data2)}>trigger</button>
              </NavItem>
              </div>
              

              {/* vertical divider */}
              <div className="nav-divider" />

             
              <NavItem>
                
                <AuthDropDown />
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Container>
      {(eventMessages && eventMessages.length > 0) && <AlertModal isopen={showAlert} message={eventMessages} title="Alert" toggle={() => { setShowAlert(false)}} />}
    </Navbar>
  );
};

export default AuthorizedNavbar;
