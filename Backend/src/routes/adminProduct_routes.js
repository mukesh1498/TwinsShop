const express = require("express");
const router = express.Router();

const ProductController = require("../controller/product_controller");
const authenticate = require("../middleware/authenticate.js");

router.post("/", authenticate, ProductController.createProduct);
router.post("/creates", authenticate, ProductController.createMultipleProduct);
router.delete("/:id", authenticate, ProductController.deleteProduct);
router.put("/:id", authenticate, ProductController.updateProduct);

module.exports = router;
