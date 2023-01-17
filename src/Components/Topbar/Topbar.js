import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
        <Container>
          <Navbar.Brand as={Link} to="/home" style={{ color: "black" }}>
            Onubikkhon.Com
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/home" style={{ color: "black" }}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/buynow" style={{ color: "black" }}>
                  Buy Now
                </Nav.Link>
                <Nav.Link as={Link} to="/tutorial" style={{ color: "black" }}>
                  Foldscope Tutorial
                </Nav.Link>
                <Nav.Link as={Link} to="/workshop" style={{ color: "black" }}>
                  Workshop
                </Nav.Link>
                <Nav.Link as={Link} to="/reviews" style={{ color: "black" }}>
                  Reviews
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Topbar;
