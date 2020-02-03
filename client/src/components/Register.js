import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../actions/authActions";
import PropTypes from "prop-types";
import Navigation from "./Navigation";
import { Link, withRouter } from "react-router-dom";
class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    msg: null
  };
  static propTypes = {
    error: PropTypes.object,
    register: PropTypes.func.isRequired
  };
  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error && error.id === "REGISTER_FAIL") {
        this.setState({
          msg: error.msg.msg
        });
      } else {
        this.setState({
          msg: null
        });
      }
    }
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = this.state;
    const newUser = {
      name,
      email,
      password
    };
    this.props.register(newUser, this.props.history);
    console.log(newUser);
  };
  validateEmail(email) {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
  }
  render() {
    return (
      <div className="overflow-hidden">
        <Navigation />
        <form noValidate onSubmit={this.handleSubmit}>
          <h1 className="text-center pt-5">Register</h1>

          <div className="pb-5 pt-3 px-5 mx-auto">
            <div className="form-group pb-2 px-2">
              <label className="pb-1" htmlFor="exampleInputName">
                Name
              </label>
              <input
                name="name"
                type="text"
                className={
                  "form-control pl-2 " +
                  (this.state.name.length && this.state.name.length >= 6
                    ? "is-valid"
                    : "is-invalid")
                }
                placeholder="Enter name"
                onChange={this.handleChange}
              />
              <div className="invalid-feedback pt-1">
                Name must be longer than 6 characters
              </div>
            </div>
            <div className="form-group p-2">
              <label className="pb-1" htmlFor="exampleInputEmail">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                className={
                  "form-control pl-2 " +
                  (this.validateEmail(this.state.email) === true
                    ? "is-valid"
                    : "is-invalid")
                }
                placeholder="Enter email"
                onChange={this.handleChange}
              />
              <div className="invalid-feedback pt-1">Email must be valid</div>
            </div>
            <div className="form-group p-2">
              <label className="pb-1" htmlFor="exampleInputPassword">
                Password
              </label>
              <input
                name="password"
                type="password"
                className={
                  "form-control pl-2 " +
                  (this.state.password.length && this.state.password.length >= 6
                    ? "is-valid"
                    : "is-invalid")
                }
                placeholder="Enter password"
                onChange={this.handleChange}
              />
              <div className="invalid-feedback pt-1">
                Password must be longer than 6 characters
              </div>
            </div>
            {this.state.msg ? (
              <span className="pl-2 text-danger text-center">
                {this.state.msg}
              </span>
            ) : null}

            <div className="p-2 py-4">
              <button type="submit" className="btn btn-primary p-3">
                Submit
              </button>
            </div>
            <footer className="py-5">
              <Link to="/login" className="p-3">
                Already a user?
              </Link>
            </footer>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  error: state.error
});

export default connect(mapStateToProps, { register })(withRouter(Register));
