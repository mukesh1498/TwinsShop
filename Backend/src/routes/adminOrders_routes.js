const express = require("express");
const router = express.Router();
const adminController = require("../controller/adminOrder_controller.js");
const authenticate = require("../middleware/authenticate.js");

router.get("/", authenticate, adminController.getAllOrders);
router.put("/:orderId/confirmed", authenticate, adminController.getAllOrders);
router.put("/:orderId/ship", authenticate, adminController.shippOrders);
router.put("/:orderId/deliver", authenticate, adminController.deliverOrders);
router.put("/:orderId/cancel", authenticate, adminController.cancelledOrders);
router.put("/:orderId/delete", authenticate, adminController.deleteOrders);
module.exports = router;