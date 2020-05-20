import React, { Component } from "react";

import { connect } from "react-redux";
import {
  deleteItem,
  addItemToCart,
  getItems,
  addItem,
  addItemToGuestCart,
  getGuestCartItems,
} from "../actions/itemActions";
import shortid from "shortid";

class ProductList extends Component {
  state = {
    itemToShow: [],
  };
  componentDidMount() {
    this.props.getGuestCartItems();
  }
  showAdded(i) {
    this.setState({ itemToShow: [...this.state.itemToShow, i] }, () => {
      setTimeout(() => {
        this.setState({
          itemToShow: this.state.itemToShow.filter((item) => item !== i),
        });
      }, 3500);
    });
  }
  onDeleteItem = (id) => {
    this.props.deleteItem(id);
  };
  // add to guest cart localstorage
  onAddToGuestCart = (item) => {
    item.guestItemID =
      shortid.generate() + String(Math.floor(Math.random() * 30));

    this.props.addItemToGuestCart(item);
    this.props.getGuestCartItems();
  };

  // add to logged in user cart
  onAddToCart = (item, user) => {
    const newItem = {
      name: item.name,
      description: item.description,
      category: item.category,
      price: item.price,
      userRefID: user._id,
      productImage: item.productImage,
    };

    this.props.addItemToCart(newItem);
  };

  render() {
    const { items } = this.props.item;
    const { user } = this.props.auth;
    const { isAuthenticated } = this.props.auth;
    const filteredItems =
      items && items.filter((item) => item.userRefID === "");

    return (
      <div>
        <h2 className="mt-4 mb-2 text-center">
          Shop : {filteredItems.length} Products
        </h2>
        <h5 className="mx-4 my-2 float-left">Featured </h5>
        <div className="row my-4 mx-auto justify-content-center container-fluid">
          {filteredItems &&
            filteredItems.map((item, i) =>
              item.userRefID ? null : (
                <div
                  className="card card-group col-3 col-sm-3 col-md-2 col-lg-2 m-2 p-1 d-flex flex-column justify-content-between mh-100"
                  key={i}
                >
                  <img
                    className="p-3 img-fluid w-100 mx-auto"
                    src={item.productImage}
                    alt=""
                  />
                  <div className="text-center pt-2">
                    <h6 className="mx-auto mb-2">{item.name}</h6>

                    <p className="mx-auto">${item.price}</p>
                  </div>
                  <div className="text-center container mt-3 mb-4">
                    {isAuthenticated === true ? (
                      <button
                        type="button"
                        className={
                          "btn p-2 w-75 " +
                          (this.state.itemToShow.includes(i)
                            ? "btn-outline-success"
                            : "btn-outline-info")
                        }
                        onClick={() => {
                          this.showAdded(i);
                          this.onAddToCart(item, user);
                        }}
                      >
                        {this.state.itemToShow.includes(i) ? "Saved" : "Add"}
                      </button>
                    ) : (
                      <button
                        type="button"
                        className={
                          "btn p-1 w-75 " +
                          (this.state.itemToShow.includes(i)
                            ? "btn-outline-success"
                            : "btn-outline-info")
                        }
                        onClick={() => {
                          this.showAdded(i);
                          this.onAddToGuestCart(item);
                        }}
                      >
                        {this.state.itemToShow.includes(i) ? "Saved" : "Add"}
                      </button>
                    )}
                    <button onClick={() => this.onDeleteItem(item._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  item: state.item,
  auth: state.auth,
});
export default connect(mapStateToProps, {
  deleteItem,
  addItemToCart,
  addItem,
  getItems,
  addItemToGuestCart,
  getGuestCartItems,
})(ProductList);
