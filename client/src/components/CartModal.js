import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteItem,
  addItemToCart,
  getItems,
  addItem
} from "../actions/itemActions";
import { Modal, Button } from "bootstrap-4-react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
class CartModal extends Component {
  handleClick = () => {
    this.props.history.push("/payment");
  };
  render() {
    const { items } = this.props.item;
    const { user } = this.props.auth;

    // const filteredItems = items.filter(item => item.userRefID === "");
    const cartFilteredItems = items.filter(
      item => item.userRefID !== "" && item.userRefID === user._id
    );

    let cartTotal = cartFilteredItems.reduce(
      (prev, current) => prev + current.price,
      0
    );
    let cartTotalTax = cartTotal * 0.15;
    let cartTotalWithTax = cartTotal && cartTotal + cartTotalTax;
    console.log(cartTotalTax);
    console.log(cartTotalWithTax);
    return (
      <div>
        <Modal id="exampleModal" fade>
          <Modal.Dialog centered className="m-auto">
            <Modal.Content>
              <Modal.Header className="p-3">
                <Modal.Title className="float-left w-25 font-wieght-bolder">
                  My Cart
                </Modal.Title>
                <Modal.Close className="float-right w-25">
                  <span aria-hidden="true" className="float-right">
                    &times;
                  </span>
                </Modal.Close>
              </Modal.Header>

              <div className="p-3 w-75 mx-auto">
                <h2>Items</h2>
                <h4>Qty in cart: {cartFilteredItems.length}</h4>
                {items &&
                  items.map((item, i) =>
                    item.userRefID === user._id ? (
                      <div className="card p-4" key={i}>
                        <h5>Name: {item.name}</h5>
                        <p>Description: {item.description}</p>
                        <p>Category: {item.category}</p>
                        <p>Price: ${item.price}</p>

                        <div className="image-container mx-auto">
                          <img
                            className="img-fluid img-thumbnail center-block"
                            src={item.productImage}
                            alt=""
                          />
                        </div>

                        <div className="row d-flex justify-content-center align-content-end pt-5 h-25">
                          <button
                            className="btn btn-primary w-50 p-2"
                            onClick={() => this.onDeleteItem(item._id)}
                          >
                            Remove
                          </button>

                          <div className="m-3"></div>
                        </div>
                      </div>
                    ) : null
                  )}
              </div>

              <Modal.Footer className="border-dark row px-5 py-3 ">
                <h5>Cart Total: {cartTotal.toFixed(2)}</h5>
                <h5>Shipping & Handling: FREE</h5>
                <h5>Tax: {cartTotalTax.toFixed(2)}</h5>
                <h3 className="font-weight-bolder border-top">
                  Order total ({cartFilteredItems.length} item): $
                  {cartTotalWithTax.toFixed(2)}
                </h3>
                <Button
                  className="col-12 my-1 w-25 p-2"
                  secondary
                  data-dismiss="modal"
                >
                  Close cart
                </Button>
                <Link
                  className="btn btn-primary btn-danger col-12 my-1 w-25 p-2"
                  to={{
                    pathname: "/payment",
                    state: [cartTotalWithTax]
                  }}
                  onClick={this.handleClick}
                >
                  CHECKOUT
                </Link>
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
  getItems
})(withRouter(CartModal));
