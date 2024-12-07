import { Router } from "express"
import { getAllOrders, getOrderById, addOrder } from "../controllers/orders"

export const orderRouter = Router()

orderRouter.get("/all", getAllOrders)
orderRouter.get("/:id", getOrderById)
orderRouter.post("/add", addOrder)
