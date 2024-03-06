const express = require("express");
const router = express.Router();

const cartController = require("../controller/cart_controller.js");
const authenticate = require("../middleware/authenticate.js");

router.get("/", cartController.findUserCart);
router.put("/", cartController.addItemToCart);

module.exports = router;
