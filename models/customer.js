const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    contactNumber: { type: String, required: true },
  },
  { collection: "customer" }
);

// CustomerSchema.index({ firstName: 1 }, { unique: true });

const model = mongoose.model("Customer", CustomerSchema);

module.exports = model;
