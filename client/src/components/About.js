import React, { Component } from "react";
import Navigation from "./Navigation";

export default class About extends Component {
  render() {
    return (
      <div>
        <Navigation />

        <div className="content weights">
          <h1 className="text-white pt-5 text-center font-weight-bolder border-bottom">
            About Us
          </h1>
          <div className="row mx-5 my-2 img-avatar">
            <div className="my-auto col-lg-4 col-md-4 col-sm-12">
              <img
                src={require("../data/IMG_1341.jpg")}
                alt="profileAvatar"
                className="d-block mx-auto my-4 img-self img-fluid img-thumbnail rounded-circle"
              />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 my-auto px-3">
              <div className="d-flex flex-column mx-5 my-auto text-white align-content-center">
                <h2 className="py-1">Brandon Tsai</h2>
                <p className="py-1">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Natus molestias facere cumque quae sapiente vitae at eligendi
                  maxime, iste, enim optio quas minima! Necessitatibus, nemo?
                </p>
                <p className="py-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ullam architecto temporibus vitae eveniet dolore modi enim
                  deserunt sed totam dolorum!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
