import React, { Component } from "react";
import BookingForm from "./BookingForm";
import Navigation from "./Navigation";
import "../App.css";
export default class Homepage extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="Navigation-container">
            <Navigation />
          </div>
          <div className="content clinic">
            <div className="content-words">
              <h1>Our Dedication</h1>
              <p>Aid recovery, boost performance, maximize confidence</p>
            </div>
          </div>
          <div className="content physio">
            <div className="content-words">
              <h1>Physio</h1>
              <p>Aid recovery, boost performance</p>
            </div>
          </div>
          <div className="content services">
            <div className="content-words">
              <h1>Services</h1>
              <p>Hands-on, manipulative, correcting biomechanics</p>
            </div>
          </div>
          <div className="content team">
            <div className="content-words">
              <h1>Our Team</h1>
              <p>Professional, honest, driven</p>
            </div>
          </div>

          <footer>
            <BookingForm />
            <hr className="mt-4" />
            <div className="m-5 ml-5 w-100 location-container pt-2">
              <div className="d-flex row ">
                <i className="fa fa-location-arrow fa-2x col-2" />

                <p className="col-6">
                  2/319 Morrison Street, Mt Wannabe, New Zealand
                </p>
              </div>
              <div className="d-flex row ">
                <i className="fa fa-mobile-phone fa-4x col-2 py-4 my-auto"></i>
                <p className="col-6 my-auto">Phone: +649 439 1239</p>
              </div>
              <div className="d-flex row pb-4 mt-3">
                <i className="fa fa-inbox fa-2x col-2"></i>
                <p className="col-6">Email: Physiorevolution@hotmail.com</p>
              </div>
            </div>
          </footer>
          <div className="m-4 copyright">&copy; Physio Revolution, 2020</div>
        </div>
      </div>
    );
  }
}
