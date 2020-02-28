import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class BookingForm extends Component {
  render() {
    return (
      <div className="px-5 pt-3 mx-auto booking-container">
        <Form>
          <h1 className="my-3 mt-5 text-center booking-title">
            Have a question?
          </h1>
          <Form.Group className="py-2 pt-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              className="pl-2"
              type="name"
              placeholder="Enter Name"
            />
          </Form.Group>
          <Form.Group className="py-2" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className="pl-2"
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group
            className="contact-form-number py-2"
            controlId="formBasicNumber"
          >
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              className="pl-2"
              type="number"
              placeholder="Enter contact number"
            />
          </Form.Group>
          <Form.Group className="py-2 pb-5" controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              className="pl-2"
              type="message"
              placeholder="Enter message"
            />
          </Form.Group>

          <Form.Group
            className="d-flex flex-row pl-3"
            controlId="formBasicCheckbox"
          >
            <Form.Check className="label-default" type="checkbox" />
            <p className="pl-1">Send updates on latest news and offers</p>
          </Form.Group>
          <Form.Group
            className="d-flex flex-row pb-1 pl-3"
            controlId="formBasicTermConditions"
          >
            <Form.Check className="label-default" type="checkbox" />
            <p className="pl-1">I accept the terms and conditions</p>
          </Form.Group>
          <Button
            className="py-3 px-5 align-center "
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
          <div className="pb-4"></div>
        </Form>
      </div>
    );
  }
}
