import { Router } from "express"
import { getAllProducts, getProductById } from "../controllers/products"

export const productsRouter = Router()

productsRouter.get("/all", getAllProducts)
productsRouter.get("/:id", getProductById)
