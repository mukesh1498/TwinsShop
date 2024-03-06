const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderItemSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: "products", required: true },
  quantity: { type: Number, required: true },
  size: {
    type: String,
  },
  quantity: {
    type: Number,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  discountedPrice: {
    type: Number,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },

  // reference to the Product model
});

const OrderItem = mongoose.model("orderItems", orderItemSchema);
module.exports = OrderItem;
