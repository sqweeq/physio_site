const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const ItemSchema = new Schema({
  name: {
    type: String
    // required: true
  },
  description: { type: String },
  date: {
    type: Date,
    default: Date.now
  },
  price: { type: Number },
  category: { type: String },
  // showMore: {
  //   type: Boolean,
  //   default: false
  // },
  userRefID: { type: String, default: "" },
  productImage: { type: String },
  guestItemID: { type: String }
  // image: { type: String },
  // subcategory: {
  //   type: String
  // }
  // image2: { type: String }
});
module.exports = Item = mongoose.model("item", ItemSchema);
