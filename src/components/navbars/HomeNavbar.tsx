import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Container,
  Button,
} from "reactstrap";
import "./HomeNavbar.css";
import { logoWhite } from "../../utils/Images";
import useAuth from "../../hooks/useAuth";
import { NavLink } from "react-router-dom";

const HomeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {isAuthenticated} = useAuth();
  const toggle = () => setIsOpen(!isOpen);

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
              <NavItem>
                <NavLink to="/customers/healthplan" className="nav-link">
                  For <span className="highlight">Medicare</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/customers" className="nav-link">
                  For <span className="highlight">Customers</span>
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="#">
                  For <span className="highlight">Brokers</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  For <span className="highlight">Employers</span>
                </NavLink>
              </NavItem> */}

              {/* vertical divider */}
              <div className="nav-divider" />

              <NavItem>
                {!isAuthenticated ? <NavLink to="/login" className="search-link btn btn-outline-primary px-4 shadow-lg">
                  Login
                </NavLink>:
                <Button className="search-link px-4 shadow-lg" color="primary" onClick={()=>{
                        localStorage.clear();
                        window.location.href="/"
                    }}>Logout</Button>
}
              </NavItem>
              {/* <NavItem>
                <NavLink href="#">Español</NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default HomeNavbar;
