"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoryById = exports.getAllCategories = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllCategories = async (_req, res) => {
    try {
        const categories = await prisma.category.findMany();
        res.json(categories);
    }
    catch (error) {
        res.status(500).json({
            error,
            message: "Error fetching categories",
            code: "P500",
        });
    }
};
exports.getAllCategories = getAllCategories;
const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await prisma.category.findUnique({
            where: { id: Number(id) },
        });
        const products = await prisma.product.findMany({
            where: { categoryId: Number(id) },
        });
        res.json({ category, products });
    }
    catch (error) {
        res.status(500).json({
            error,
            message: "Error fetching category",
            code: "P500",
        });
    }
};
exports.getCategoryById = getCategoryById;
//# sourceMappingURL=categories.js.map