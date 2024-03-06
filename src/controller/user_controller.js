const userService = require("../services/user_service.js");

const getUserProfile = async (req, res) => {
  try {
    debugger;
    const jwt = req.headers.authorization?.split(" ")[1];
    console.log("Request Headers:", req.headers);

    if (!jwt) {
      return res
        .status(404)
        .send({ error: "Token not found", message: "hdhbdhbd" });
    }

    const user = await userService.getUserProfileByToken(jwt);
    return res
      .status(200)
      .send({ success: true, data: user, message: "User found" });
  } catch (error) {
    console.error("Error in getUserProfile:", error.message);
    return res
      .status(500)
      .send({ message: "Internal Server Error", error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = { getAllUsers, getUserProfile };
