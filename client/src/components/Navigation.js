import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar className="py-3 px-3" bg="light" variant="light">
          <Navbar.Brand className="nav-title" href="home">
            Physio Revolution
          </Navbar.Brand>

          <Nav className="mr-auto">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link className="ml-2" to="/faq">
              F.A.Q
            </Link>
            <Link to="/contact">Contact</Link>
            <Link className="ml-2 " to="/shop">
              Shop
            </Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
