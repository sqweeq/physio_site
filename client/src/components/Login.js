import React, { Component } from "react";
import Navigation from "./Navigation";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/authActions";
class Login extends Component {
  state = {
    email: "",
    password: "",
    msg: null
  };
  componentDidUpdate(prevProps) {
    //   see if error props has changed
    const { error } = this.props;
    if (error !== prevProps.error) {
      //   check for register error
      if (error && error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
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
    const { email, password } = this.state;
    const user = {
      email,
      password
    };
    // attempt to login
    this.props.login(user, this.props.history);
    // this.props.history.push("/");
    // this.props.();
  };

  render() {
    return (
      <div>
        <div className="row">
          <Navigation />
          <Link className="p-4" to="/shop">
            &#x2190; Return to shop
          </Link>
        </div>

        <form noValidate onSubmit={this.handleSubmit}>
          <h1 className="text-center pt-4">Login page</h1>

          <div className="pb-5 px-5 mx-auto">
            <div className="form-group p-3">
              <label className="pb-1" htmlFor="exampleInputEmail">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                className="form-control pl-2"
                placeholder="Enter email"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group p-3">
              <label className="pb-1" htmlFor="exampleInputPassword">
                Password
              </label>
              <input
                name="password"
                type="password"
                className="form-control pl-2"
                placeholder="Enter password"
                onChange={this.handleChange}
              />
            </div>
            {this.state.msg ? (
              <span className="pl-3 text-center text-danger">
                {this.state.msg}
              </span>
            ) : null}
            <div className="p-3">
              <button type="submit" className="btn btn-primary p-2">
                Submit
              </button>
            </div>
            <Link to="/register" className="p-3">
              Create new account
            </Link>
          </div>
        </form>
        <div className="m-4 copyright">&copy; Physio Revolution, 2020</div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, { login })(withRouter(Login));
