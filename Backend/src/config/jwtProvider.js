const jwt = require("jsonwebtoken");

const SECRET_KEY = "hdgdsgduhsdgwyhluhy33buhy3y46efhwkjhufe746";

const generateToken = (userId) => {
  const token = jwt.sign({ userId }, SECRET_KEY, { expiresIn: "48h" }); // Use "48h" for 48 hours
  return token;
};

const getUserIdFromToken = (token) => {
  const decodedToken = jwt.verify(token, SECRET_KEY);
  return decodedToken.userId;
};

module.exports = { generateToken, getUserIdFromToken };
