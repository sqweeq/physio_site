import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem, getItems } from "../actions/itemActions";
import { withRouter } from "react-router-dom";

class AddProduct extends Component {
  state = {
    name: "",
    description: "",
    price: Number,
    category: "",
    userRefID: "",
    productImage: "",
  };
  // submit new product
  handleSubmit = (e) => {
    e.preventDefault();

    const { name, description, price, category, userRefID } = this.state;
    let formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("userRefID", userRefID);
    formData.append("productImage", this.img.files[0]);

    const newItem = {
      name,
      description,
      price,
      category,
      userRefID,
      productImage: this.img.files[0],
    };
    this.props.addItem(newItem, formData, this.props.history);
    console.log(newItem);
    this.props.getItems();

    this.setState({
      name: "",
      description: "",
      price: null,
      category: "",
      userRefID: "",
      productImage: "",
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div className="pt-3 p-5 mx-auto">
        <h1 className="p-5 text-center">Add Product</h1>
        <form
          noValidate
          onSubmit={this.handleSubmit}
          encType="multipart/form-data"
        >
          <div className="form-group">
            <label htmlFor="inputName">Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Enter name"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputDescription">Description</label>
            <input
              name="description"
              type="text"
              className="form-control"
              placeholder="Enter description"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPrice">Price</label>
            <input
              name="price"
              type="number"
              className="form-control"
              placeholder="Enter price"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputCategory">Category</label>
            <input
              name="category"
              type="text"
              className="form-control"
              placeholder="Enter category"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputCategory">upload image</label>
            <input
              ref={(c) => (this.img = c)}
              name="productImage"
              type="file"
              className="form-control"
              placeholder="Enter category"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">add new item </button>
        </form>
      </div>
    );
  }
}
export default connect(null, { addItem, getItems })(withRouter(AddProduct));
