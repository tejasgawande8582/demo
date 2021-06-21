var express = require("express");
var router = express.Router();

const Customer = require("../models/customer");

// List customers
router.get("/", async function (req, res, next) {
  const customerList = await Customer.find();
  res.json(customerList);
});

// Add customer
router.post("/", async function (req, res, next) {
  const newCustomer = await Customer.create(req.body);
  res.send(newCustomer);
});

// Update customer
router.put("/:id", async function (req, res, next) {
  const { id } = req.params;
  const payload = req.body;

  await Customer.findByIdAndUpdate(id, payload);

  const updatedCustomer = await Customer.findById(id);

  res.send(updatedCustomer);
});

// Delete customer
router.delete("/:id", async function (req, res, next) {
  const { id } = req.params;

  await Customer.findByIdAndDelete(id);

  res.send();
});

module.exports = router;
