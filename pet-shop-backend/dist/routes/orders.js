"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = require("express");
const orders_1 = require("../controllers/orders");
exports.orderRouter = (0, express_1.Router)();
exports.orderRouter.get("/all", orders_1.getAllOrders);
exports.orderRouter.get("/:id", orders_1.getOrderById);
exports.orderRouter.post("/add", orders_1.addOrder);
//# sourceMappingURL=orders.js.map