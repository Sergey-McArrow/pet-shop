"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOrder = exports.getOrderById = exports.getAllOrders = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllOrders = async (_req, res) => {
    try {
        const orders = await prisma.order.findMany();
        res.json(orders);
    }
    catch (error) {
        res.status(500).json({
            error,
            message: "Error fetching orders",
            code: "P500",
        });
    }
};
exports.getAllOrders = getAllOrders;
const getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await prisma.order.findUnique({
            where: { id: Number(id) },
        });
        res.json(order);
    }
    catch (error) {
        res.status(500).json({
            error,
            message: "Error fetching order",
            code: "P500",
        });
    }
};
exports.getOrderById = getOrderById;
const addOrder = async (req, res) => {
    try {
        const { order } = req.body;
        const orderItems = order.products.map((product) => ({
            productId: product.id,
            quantity: product.quantity,
        }));
        const newOrder = await prisma.order.create({
            data: {
                name: order.name,
                email: order.email,
                phone: order.phone,
                total: order.total,
                status: "pending",
                items: orderItems,
            },
        });
        res.json(newOrder);
    }
    catch (error) {
        console.error("Order creation error:", error);
        res.status(500).json({
            error,
            message: "Database Error. Error creating order",
            code: "P500",
        });
    }
};
exports.addOrder = addOrder;
//# sourceMappingURL=orders.js.map