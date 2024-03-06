const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: "users" }, // reference to the User model
  cartItems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cartItems",
      required: true,
    },
  ],
  totalPrice: {
    type: Number,
    default: 0,
    required: true,
  },
  Totalitem: {
    type: Number,
    default: 0,
    required: true,
  },
  totalDiscountPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  discount: {
    type: Number,
    default: 0,
    required: true,
  },
});

const Cart = mongoose.model("cart", CartSchema);
module.exports = Cart;
