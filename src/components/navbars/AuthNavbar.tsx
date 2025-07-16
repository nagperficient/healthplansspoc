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
import { ArrowLeft } from "lucide-react";

const AuthNavbar = () => {
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
                                <NavLink href="/">
                                    <ArrowLeft size={14} /> Back to <span className="highlight">Home</span>
                                </NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </div>
            </Container>
        </Navbar>
    );
};

export default AuthNavbar;
