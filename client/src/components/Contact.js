import React, { Component } from "react";
import Navigation from "./Navigation";
export default class Contact extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="content weights h-auto text-white">
          <h1 className="pt-5 border-bottom">Book now!</h1>
        </div>
      </div>
    );
  }
}
