const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a Title for the Product"],
  },
  description: {
    type: String,
    required: [true, "Please provide a Description of the Product"],
  },
  price: {
    type: Number,
    required: true,
  },
  discountedPrice: {
    type: Number,
  },
  discountPersent: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  brand: {
    type: String,
  },
  color: {
    type: String,
  },
  sizes: [
    {
      name: { type: String },
      quantity: { type: Number },
    },
  ],
  imageUrl: { type: String },
  ratings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ratings",
    },
  ],
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "reviews",
    },
  ],
  numRatings: {
    type: Number,
    default: 0,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Product = mongoose.model("products", productSchema);
module.exports = Product;
