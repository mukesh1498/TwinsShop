const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res
    .status(200)
    .send({ message: "Welcome to ecommerce api", status: true });
});

const authRouters = require("./routes/auth_routes.js");
app.use("/auth", authRouters);

const userRouters = require("./routes/user_routes.js");
app.use("/api/users", userRouters);

const productRouter = require("./routes/product_routes.js");
app.use("/api/products", productRouter);

const adminProductRouter = require("./routes/adminProduct_routes.js");
app.use("/api/admin/products", adminProductRouter);

const adminOrderRouter = require("./routes/adminOrders_routes.js");
app.use("/api/admin/orders", adminOrderRouter);

const cartRouter = require("./routes/cart_routes.js");
app.use("/api/cart", cartRouter);

const cartItemRouter = require("./routes/cartItem_routes.js");
app.use("/api/cart_items", cartItemRouter);

// const orderRouter = require("./routes/order_routes.js");
// app.use("/api/orders", orderRouter);

const reviewRouter = require("./routes/review_routes.js");
app.use("/api/reviews", reviewRouter);

const ratingRouter = require("./routes/rating_routes.js");
app.use("/api/ratings", ratingRouter);
module.exports = app;
