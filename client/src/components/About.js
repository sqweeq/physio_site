import React, { Component } from "react";
import Navigation from "./Navigation";

export default class About extends Component {
  render() {
    return (
      <div>
        <Navigation />

        <div className="content weights">
          <h1 className="text-white p-5 text-center">About Us</h1>
        </div>
      </div>
    );
  }
}
