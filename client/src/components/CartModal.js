import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteItem,
  addItemToCart,
  getItems,
  addItem,
  getGuestCartItems,
  clearGuestCart,
  deleteGuestItem,
  clearUserCart
} from "../actions/itemActions";
import { Modal, Button } from "bootstrap-4-react";
import { withRouter } from "react-router-dom";
class CartModal extends Component {
  state = {
    itemsCleared: false
  };

  onClearItemsButton() {
    clearInterval(this.state.itemsCleared);
    this.setState(
      {
        itemsCleared: true
      },
      () => {
        setInterval(() => {
          this.setState({
            itemsCleared: false
          });
        }, 5000);
      }
    );
  }
  componentDidMount = () => {
    this.addGuestCartToUser();
  };

  onClearUserCart = (user, items) => {
    this.props.clearUserCart(user, items);
  };

  onClearGuestCart = () => {
    this.props.clearGuestCart();
  };
  deleteGuestCartItem = item => {
    this.props.deleteGuestItem(item);
    this.props.getGuestCartItems();
  };
  addGuestCartToUser() {
    this.props.getItems();
    const { items } = this.props.item;
    const { user } = this.props.auth;
    const { isAuthenticated } = this.props.auth;
    let existingGuestCart = JSON.parse(localStorage.getItem("guestCart"));

    // added userID to guest cart items
    let newItems =
      isAuthenticated &&
      existingGuestCart &&
      existingGuestCart.filter(item => {
        if (item.userRefID !== user._id) {
          item.userRefID = user._id;
        }
        return item;
      });
    let userLocalCompare =
      newItems &&
      newItems.filter(guestItem => {
        return items.some(userItem => {
          return (
            userItem._id === guestItem._id &&
            guestItem.guestItemID !== userItem.guestItemID
          );
        });
      });

    // isAuthenticated && this.props.addItemToCart(userLocalCompare);
    console.log(
      userLocalCompare && userLocalCompare.map(item => item.guestItemID)
    );

    console.log(
      items &&
        items
          .filter(item => item.guestItemID !== undefined && item.guestItemID)
          .map(item => item.guestItemID)
    );
  }

  render() {
    const { items } = this.props.item;
    const { user } = this.props.auth;
    const { isAuthenticated } = this.props.auth;
    const { guestCart } = this.props.item;

    const deleteCartItem = item => {
      this.props.getItems();
      this.props.deleteItem(item._id);
    };

    let cartFilteredItems = isAuthenticated
      ? items.filter(
          item => item.userRefID !== "" && item.userRefID === user._id
        )
      : guestCart;

    let cartTotal =
      cartFilteredItems &&
      cartFilteredItems.reduce((prev, current) => prev + current.price, 0);
    let shippingCost = cartTotal && cartTotal > 100 ? 0 : 7.99;
    let cartTotalTax = cartTotal && cartTotal * 0.15;
    let cartTotalWithTax = cartTotal && cartTotal + cartTotalTax + shippingCost;

    const loggedCheckout = () => {
      this.props.history.push({
        pathname: "/payment",
        state: cartTotalWithTax
      });
    };

    const guestCheckout = () => {
      this.props.history.push({
        pathname: "/payment",
        state: cartTotalWithTax
      });
    };
    let unique = [
      ...new Set(cartFilteredItems && cartFilteredItems.map(item => item.name))
    ];
    // const duplicateCart = unique.map(item => [
    //   item,
    //   unique.filter(str => str === item).length
    // ]);
    console.log(unique);
    // console.log(duplicateCart);

    return (
      <div>
        <Modal id="exampleModal" fade>
          <Modal.Dialog centered className="m-auto">
            <Modal.Content>
              <Modal.Header className="p-3 border-dark">
                <Modal.Title
                  style={{ textTransform: "capitalize" }}
                  className="float-left w-25 font-wieght-bolder"
                >
                  {isAuthenticated ? `${user.name}'s Cart` : "Guest Cart"}
                </Modal.Title>
                <Modal.Close className="float-right modal-closing">
                  <span aria-hidden="true" className="float-right mr-2">
                    &times;
                  </span>
                </Modal.Close>
              </Modal.Header>

              <div className="py-3 w-75 mx-auto">
                <h2>My Bag</h2>
                <h5 className="m-3 mx-auto">
                  Qty in cart:{" "}
                  {cartFilteredItems && cartFilteredItems.length === null
                    ? 0
                    : cartFilteredItems && cartFilteredItems.length}
                </h5>

                {cartFilteredItems &&
                  cartFilteredItems.map((item, i) => (
                    <div
                      className="py-4 row border-top border-bottom border-secondary "
                      key={i}
                    >
                      <div className="col-6 image-container m-auto">
                        <img
                          className="img-fluid center-block w-100 align-items-center"
                          src={item.productImage}
                          alt=""
                        />
                      </div>
                      <div className="col-6 d-flex flex-column justify-content-between">
                        {/* <p>{i}</p> */}
                        {/* <h5>GuestID: {item.guestItemID && item.guestItemID}</h5> */}
                        <h4 className="pb-3">{item.name}</h4>
                        <p className="pb-3">Description: {item.description}</p>

                        {/* <p>Category: {item.category}</p> */}
                        <p className="pb-3">Price: ${item.price}</p>
                        <div className="text-center">
                          <button
                            className="btn btn-primary w-50 p-2"
                            onClick={
                              isAuthenticated
                                ? () => deleteCartItem(item)
                                : () => this.deleteGuestCartItem(item)
                            }
                          >
                            Remove
                          </button>

                          <div className="m-3"></div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              <button
                type="button"
                className={
                  "col-12 my-2 p-2 w-75 mx-auto mb-4 btn " +
                  (!this.state.itemsCleared ? "btn-info" : "btn-success")
                }
                onClick={
                  isAuthenticated
                    ? () => {
                        this.onClearUserCart(user, items);
                        this.onClearItemsButton();
                      }
                    : () => {
                        this.onClearGuestCart();
                        this.onClearItemsButton();
                      }
                }
              >
                {!this.state.itemsCleared ? "Reset Cart" : "Cart Cleared!"}
              </button>

              <Modal.Footer className="border-dark row px-5 py-3 ">
                <div className="justify-content-center w-100">
                  <h5 className="pt-4 pb-2">
                    Cart Total: {cartTotal && cartTotal.toFixed(2)}
                  </h5>
                  <h5 className=" pt-2 pb-2">
                    Shipping & Handling:{" "}
                    {cartTotal > 100
                      ? "FREE"
                      : cartTotal === 0
                      ? "0"
                      : shippingCost}
                  </h5>
                  <h5 className="pt-2 pb-3">
                    Tax: {cartTotalTax && cartTotalTax.toFixed(2)}
                  </h5>
                </div>

                <h3 className="font-weight-bolder border-top border-secondary py-4 w-100">
                  Order total ({cartFilteredItems && cartFilteredItems.length}{" "}
                  item): ${cartTotalWithTax && cartTotalWithTax.toFixed(2)}
                </h3>

                <Button
                  className="col-12 my-1 p-2 my-3"
                  secondary
                  data-dismiss="modal"
                >
                  Close cart
                </Button>

                <Button
                  data-dismiss="modal"
                  className="btn btn-primary btn-danger col-12 mt-2 mb-4 w-25 p-2"
                  onClick={
                    isAuthenticated
                      ? () => loggedCheckout(cartTotalWithTax)
                      : () => guestCheckout(cartTotalWithTax)
                  }
                >
                  PROCEED TO CHECKOUT
                </Button>
              </Modal.Footer>
            </Modal.Content>
          </Modal.Dialog>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  item: state.item,
  auth: state.auth
});
export default connect(mapStateToProps, {
  deleteItem,
  addItemToCart,
  addItem,
  getItems,
  getGuestCartItems,
  clearGuestCart,
  deleteGuestItem,
  clearUserCart
})(withRouter(CartModal));
