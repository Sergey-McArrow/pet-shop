import { Router } from "express"
import { getAllCategories, getCategoryById } from "../controllers/categories"

export const categoriesRouter = Router()

categoriesRouter.get("/all", getAllCategories)
categoriesRouter.get("/:id", getCategoryById)
