const mongoose = require("mongoose");
const mongodbURL =
  "mongodb+srv://mukeshprajpati1498:sLhzgRGPZfeTXSNQ@cluster0.rym0rwx.mongodb.net/?retryWrites=true&w=majority";
// connect with mongodb atlas
const connectDb = async () => {
  try {
    await mongoose.connect(mongodbURL);
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}; 

module.exports = { connectDb };
