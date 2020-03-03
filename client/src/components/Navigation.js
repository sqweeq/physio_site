import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

export default class Navigation extends Component {
  render() {
    return (
      <div className="nav-container">
        <Navbar
          collapseOnSelect
          expand="md"
          className="py-3 px-3 h-100 navbar-resp"
          bg="white"
          variant="light"
        >
          <Navbar.Brand
            className="w-25
          "
            href="home"
          >
            Physio Revolution
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto text-primary nav-link-colour nav-options my-2 w-100">
              <Nav.Link className="link mx-2 my-1" href="home">
                Home
              </Nav.Link>
              <Nav.Link className="link mx-2 my-1" href="about">
                About
              </Nav.Link>
              <Nav.Link className="link mx-2 my-1" href="services">
                Services
              </Nav.Link>
              <Nav.Link className="link mx-2 my-1" href="faq">
                F.A.Q
              </Nav.Link>
              {/* <Nav.Link className="link mx-2 my-1" href="contact">
                Contact
              </Nav.Link> */}
              <Nav.Link className="link mx-2 my-1 pr-3" href="shop">
                Shop
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
