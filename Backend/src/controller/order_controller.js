const orderService = require("../services/order_service.js");

const createOrder = async (req, res) => {
    const user = req.user;
    try {
        let createdOrder = await orderService.createOrder(user, req.body);
        return res.status(201).send(createOrder);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const findOrderById = async (req, res) => {
    const user = req.user;
    try {
        let createdOrder = await orderService.findOrderById(req.params.id);
        return res.status(201).send(createOrder);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const OrderHistory = async (req, res) => {
    const user = req.user;
    try {
        let createdOrder = await orderService.userOrderHitory(user._id);
        return res.status(201).send(createOrder);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

module.exports = {
    createOrder,
    findOrderById,
    OrderHistory,
};
