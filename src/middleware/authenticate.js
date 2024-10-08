const jwtProvider = require("../config/jwtProvider.js");
const userService = require("../services/user_service.js");
const authenticate = async (req, res, next) => {
  // Barer token......
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return req
        .status(404)
        .send({ success: false, error: "token not found..." });
    }
    const userId = jwtProvider.getUserIdFromToken(token);
    const user = userService.findUserById(userId);
    req.user = user;
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
  next();
};
module.exports = authenticate;
