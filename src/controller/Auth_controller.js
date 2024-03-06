const userService = require("../services/user_service.js");
const jwtProvider = require("../config/jwtProvider.js");
const bcrypt = require("bcrypt");
const cartService = require("../services/cart_service.js");
const register = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    const jwt = jwtProvider.generateToken(user._id);

    await cartService.createCart(user);

    return res
      .status(200)
      .send({ jwt, success: user, message: "register Success" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const login = async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await userService.getUserByemail(email);
    if (!user) {
      return res
        .status(404)
        .send({ auth: true, message: "User not found with email : ", email });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .send({ auth: false, message: "Invalid Password!" });
    }
    const jwt = jwtProvider.generateToken(user._id);
    return res.status(200).send({
      auth: true,
      token: jwt,
      user: {
        id: user._id,
      },
      message: `Logged in Successfully`,
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
module.exports = { register, login };
