const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: false },
  zipCode: {
    start: { type: Number, required: true },
    end: { type: Number },
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  mobile: {
    type: String,
    required: true,
  },
});

const Address = mongoose.model("addresses", AddressSchema);
module.exports = Address;
