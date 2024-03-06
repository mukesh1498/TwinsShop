const User = require("../modals/user_modals");
const bcrypt = require("bcrypt");
const jwtProvider = require("../config/jwtProvider");

const createUser = async (userData) => {
  console.log(userData);
  try {
    const { firstName, lastName, email, password } = userData;
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      throw new Error("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 8);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    console.log("User SignUp Successfully", user);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};
const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    // .populate("address");
    if (!user) {
      throw new Error("No user with this ID", userId);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};
const getUserByemail = async (email) => {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error(`No user found with email: ${email}`);
    }

    return user;
  } catch (error) {
    console.error(`Error in getUserByemail: ${error.message}`);
    throw new Error("An unexpected error occurred");
  }
};

const getUserProfileByToken = async (token) => {
  try {
    const userId = jwtProvider.getUserIdFromToken(token);
    const user = await findUserById(userId);
    if (!user) {
      throw new Error("No user with this ID", userId);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};
const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = {
  createUser,
  getUserByemail,
  findUserById,
  getAllUsers,
  getUserProfileByToken,
};
