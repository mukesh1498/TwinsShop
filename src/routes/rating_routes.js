const express = require("express");
const router = express.Router();

const ratingController = require("../controller/rating_controller");
const authenticate = require("../middleware/authenticate");

router.post("/", authenticate, ratingController.createRating);
router.put("/product/:productId", authenticate, ratingController.getAllRating);

module.exports = router;
