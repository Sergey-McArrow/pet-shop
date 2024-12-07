"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRouter = void 0;
const express_1 = require("express");
const categories_1 = require("../controllers/categories");
exports.categoriesRouter = (0, express_1.Router)();
exports.categoriesRouter.get("/all", categories_1.getAllCategories);
exports.categoriesRouter.get("/:id", categories_1.getCategoryById);
//# sourceMappingURL=categories.js.map