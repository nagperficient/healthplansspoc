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

const AuthorizedNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    </Navbar>
  );
};

export default AuthorizedNavbar;
