"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductById = exports.getAllProducts = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllProducts = async (_req, res) => {
    try {
        const products = await prisma.product.findMany();
        res.json(products);
    }
    catch (error) {
        res.status(500).json({
            error,
            message: "Error fetching products",
            code: "P500",
        });
    }
};
exports.getAllProducts = getAllProducts;
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await prisma.product.findUnique({
            where: { id: Number(id) },
        });
        res.json(product);
    }
    catch (error) {
        res.status(500).json({
            error,
            message: "Error fetching product",
            code: "P500",
        });
    }
};
exports.getProductById = getProductById;
//# sourceMappingURL=products.js.map