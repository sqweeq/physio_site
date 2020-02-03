import React, { Component } from "react";
import Navigation from "./Navigation";
import AddProduct from "./AddProduct";
import { Link, HashRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/authActions";
import ProductList from "./ProductList";
import { getItems } from "../actions/itemActions";
import { Button } from "bootstrap-4-react";

import CartModal from "./CartModal";
class Shop extends Component {
  onLogout = () => {
    this.props.logout();
  };

  // componentDidMount() {
  //   this.props.getItems();
  // }

  render() {
    const { items } = this.props.item;

    const filteredItems = items.filter(item => item.userRefID === "");
    const { user } = this.props.auth;
    const { isAuthenticated } = this.props.auth;
    console.log(filteredItems.length);

    return (
      <div className="w-100">
        <Navigation />
        <div className="content knee">
          <div className="content-words">
            <h1 className="font-weight-bolder">Kickstart your recovery</h1>
            <h4>Free shipping if you spend over $100</h4>
          </div>
        </div>

        {isAuthenticated === true ? (
          <div className="">
            <div className="">
              <div className="p-1 mt-5 text-center">
                <h4 style={{ textTransform: "capitalize" }}>
                  Welcome {user.name}
                </h4>
                <HashRouter>
                  <Button
                    className="p-2 m-2 w-25"
                    primary
                    outline
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    View my cart
                  </Button>
                  <CartModal />
                </HashRouter>
              </div>

              {/* <p>your id: {user._id}</p> */}
            </div>
            <ProductList />
            <hr />
            <AddProduct className="pt-5" />
            <div className="row m-4 pb-5 text-center">
              <Link className="p-3" onClick={this.onLogout} to="/shop">
                Logout
              </Link>
            </div>
          </div>
        ) : (
          <div className="overflow-hidden">
            <ProductList />
            <hr />
            <div className="text-center d-flex flex-column w-25 mx-auto m-5">
              <Link className="my-4" to="/login">
                Click here to login!
              </Link>
              <Link className="" to="/register">
                No account? Register here
              </Link>
            </div>
          </div>
        )}
        <div className="m-4 copyright">&copy; Physio Revolution, 2020</div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  item: state.item,
  auth: state.auth
});
export default connect(mapStateToProps, { logout, getItems })(Shop);
