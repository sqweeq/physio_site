import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
export default class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar className="py-3 px-3" bg="light" variant="light">
          <Navbar.Brand className="nav-title" href="home">
            Physio Revolution
          </Navbar.Brand>

          <Nav className="mr-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="services">Services</Nav.Link>
            <Nav.Link className="ml-2" href="faq">
              F.A.Q
            </Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            <Nav.Link className="ml-2 " href="shop">
              Shop
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
