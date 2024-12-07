"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const categories_1 = require("./routes/categories");
const client_1 = require("@prisma/client");
const products_1 = require("./routes/products");
const orders_1 = require("./routes/orders");
const prisma = new client_1.PrismaClient();
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static("public"));
app.use("/categories", categories_1.categoriesRouter);
app.use("/products", products_1.productsRouter);
app.use("/orders", orders_1.orderRouter);
app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});
if (process.env.VERCEL !== "1") {
    app.listen(PORT, async () => {
        try {
            await prisma.$connect();
            console.log("✅ Database connection established");
            console.log(`🚀 Server started on port ${PORT}`);
        }
        catch (error) {
            console.error("❌ Error connecting to the database:", error);
            process.exit(1);
        }
    });
}
exports.default = app;
//# sourceMappingURL=app.js.map