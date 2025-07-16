import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
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
              <NavItem>
                <NavLink href="/customers/healthplan">
                  For <span className="highlight">Medicare</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/customers">
                  For <span className="highlight">Customers</span>
                </NavLink>
              </NavItem>

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
