import React, { Component } from "react";
import Navigation from "./Navigation";
import AddProduct from "./AddProduct";
import { Link } from "react-router-dom";
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

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    // const { items } = this.props.item;
    const { user } = this.props.auth;
    const { isAuthenticated } = this.props.auth;

    // if (isAuthenticated) {
    //   let existingGuestCart = JSON.parse(localStorage.getItem("guestCart"));
    //   // added userID to guest cart items
    //   let newItems =
    //     existingGuestCart &&
    //     existingGuestCart.filter(item => {
    //       if (item.userRefID !== user._id) {
    //         item.userRefID = user._id;
    //       }
    //       return item;
    //     });
    //   let userLocalCompare =
    //     newItems &&
    //     newItems.filter(guestItem => {
    //       return items.some(
    //         userItem =>
    //           userItem._id === guestItem._id &&
    //           guestItem.guestItemID !== userItem.guestItemID
    //       );
    //     });
    //   console.log(userLocalCompare);
    //   // this.props.addItemToCart(userLocalCompare);
    // }

    // const filteredItems = items.filter(item => item.userRefID === "");

    // console.log(filteredItems.length);

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

                <Button
                  className="p-1 m-2 w-25"
                  primary
                  outline
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  View my cart
                </Button>
                <CartModal />
              </div>

              {/* <p>your id: {user._id}</p> */}
            </div>
            <ProductList />
            <hr />
            <AddProduct />
            <div className="row m-4 pb-5 mx-auto text-center w-25">
              <Link
                className="p-3 h3 text-primary"
                onClick={this.onLogout}
                to="/shop"
              >
                Logout
              </Link>
            </div>
          </div>
        ) : (
          <div className="overflow-hidden">
            <div className="p-1 mt-5 text-center">
              <h3>Welcome guest!</h3>
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
            </div>
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
