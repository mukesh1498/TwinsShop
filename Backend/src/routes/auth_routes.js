const express = require("express");
const router = express.Router();
const authController = require("../controller/Auth_controller.js");

router.post("/signup", authController.register);
router.post("/", authController.login);

module.exports = router;
