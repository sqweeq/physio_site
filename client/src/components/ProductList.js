import React, { Component } from "react";

import { connect } from "react-redux";
import {
  deleteItem,
  addItemToCart,
  getItems,
  addItem
} from "../actions/itemActions";
// import { Button } from "bootstrap-4-react";
import { Dropdown, DropdownButton } from "react-bootstrap";
// import CartModal from "./CartModal";
class ProductList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onAddToCart = (item, user) => {
    const newItem = {
      name: item.name,
      description: item.description,
      category: item.category,
      price: item.price,
      userRefID: user._id,
      _id: item._id,
      productImage: item.productImage
    };
    this.props.addItemToCart(newItem);
  };

  render() {
    const { items } = this.props.item;
    const { user } = this.props.auth;

    const filteredItems = items.filter(item => item.userRefID === "");
    return (
      <div>
        <h2 className=" mt-5 mb-2 text-center">
          Shop : {filteredItems.length} Products{" "}
        </h2>
        <h5 className=" mx-4 my-2 float-left">Featured </h5>

        <div className="border-bottom border-lg "></div>
        <div className="w-50 h-100 m-5">
          <DropdownButton
            className="w-100 h-100"
            id="dropdown-basic-button"
            title="Dropdown button"
          >
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="row my-4 p-1 mx-auto justify-content-center container-fluid">
          {filteredItems &&
            filteredItems.map((item, i) =>
              item.userRefID ? null : (
                <div
                  className="card col-sm-3 col-md-3 col-lg-2 m-2 p-1 d-flex flex-column justify-content-between "
                  key={i}
                >
                  <div className="">
                    <img className="p-3" src={item.productImage} alt="" />
                  </div>
                  <div className="text-center pt-2">
                    <h6 className="mx-auto pb-2 pt-4">{item.name}</h6>
                    {/* <p className="font-weight-light">
                        Description: {item.description}
                      </p> */}
                    {/* <p>Category: {item.category}</p> */}
                    <p className="mx-auto pb-4">${item.price}</p>
                  </div>

                  <div className="text-center p-3 ">
                    <button
                      type="button"
                      className="btn btn-primary p-2 w-75 align-self-end"
                      onClick={() => this.onAddToCart(item, user)}
                    >
                      Add to cart
                    </button>
                    {/* <button onClick={() => this.onDeleteItem(item._id)}>
                      Delete{" "}
                    </button> */}
                  </div>
                </div>
              )
            )}
        </div>
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
})(ProductList);
