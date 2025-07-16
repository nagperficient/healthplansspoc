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
} from "reactstrap";
import "./HomeNavbar.css";
import { logoWhite } from "../../utils/Images";

const HomeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar light expand="lg" className="main-navbar">
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
                <NavLink href="#">
                  For <span className="highlight">Medicare</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  For <span className="highlight">Providers</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  For <span className="highlight">Brokers</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  For <span className="highlight">Employers</span>
                </NavLink>
              </NavItem>

              {/* vertical divider */}
              <div className="nav-divider" />

              <NavItem>
                <NavLink href="#" className="search-link">
                  Login / Register
                </NavLink>
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
