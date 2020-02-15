import React from "react";
import Navigation from "./Navigation";
import { Link, withRouter } from "react-router-dom";
class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: ""
  };
  handleInputFocus = e => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    // console.log(this.props.location.state);

    return (
      <div className="container-fluid mb-5 pay-form">
        <Navigation />
        <div className="mt-5">
          <Link className="m-5 vh-50" to="/shop">
            &#x2190; Return to shop
          </Link>
          <h1 className="text-center m-5 mx-auto">Payment Page</h1>
          <div className="card card-light w-75 m-auto p-5 mb-5 h-100">
            <form
              autoComplete="new-password"
              className="card-body"
              ref={c => (this.form = c)}
              onSubmit={this.handleSubmit}
            >
              <input
                name="chrome-autofill-dummy1"
                style={{ display: "none" }}
                disabled
              />
              <input
                name="chrome-autofill-dummy2"
                style={{ display: "none" }}
                disabled
              />

              <div className="form-group">
                <input
                  autoComplete="new-password"
                  type="tel"
                  name="number"
                  required
                  className="form-control mt-3 pl-2"
                  placeholder="Card Number"
                  pattern="[\d| ]{16,22}"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
                <small className="pt-1">E.g.: 49.., 51.., 36.., 37..</small>
              </div>
              <div className="form-group">
                <input
                  autoComplete="new-password"
                  type="text"
                  name="name"
                  required
                  className="form-control mt-3 pl-2"
                  placeholder="Name"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <small className="pt-1">E.g: John Doe</small>
              <div className="row">
                <div className="col-6 pr-3">
                  <input
                    autoComplete="new-password"
                    type="tel"
                    name="expiry"
                    className="form-control mt-3 pl-2"
                    placeholder="Valid Thru"
                    pattern="\d\d/\d\d"
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </div>
                <small className="pt-1">E.g: 03/21</small>
                <div className="col-6">
                  <input
                    autoComplete="new-password"
                    type="tel"
                    name="cvc"
                    className="form-control mt-3 pl-2"
                    placeholder="CVC"
                    pattern="\d{3,4}"
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </div>
                <small className="pt-1 pb-3">E.g: 999</small>
              </div>
              <h4 className="border-top border-dark py-3">
                Total: ${this.props.location.state.toFixed(2)}
              </h4>

              <div className="form-actions">
                <button className="btn btn-primary btn-block p-2">PAY</button>
              </div>
            </form>
          </div>
        </div>
        <footer className="h-25 m-4 border-bottom"></footer>
      </div>
    );
  }
}
export default withRouter(PaymentForm);
