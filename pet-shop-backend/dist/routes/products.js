"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = require("express");
const products_1 = require("../controllers/products");
exports.productsRouter = (0, express_1.Router)();
exports.productsRouter.get("/all", products_1.getAllProducts);
exports.productsRouter.get("/:id", products_1.getProductById);
//# sourceMappingURL=products.js.map