import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"

const prisma = new PrismaClient()

export const getAllOrders = async (_req: Request, res: Response) => {
  try {
    const orders = await prisma.order.findMany()
    res.json(orders)
  } catch (error) {
    res.status(500).json({
      error,
      message: "Error fetching orders",
      code: "P500",
    })
  }
}

export const getOrderById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const order = await prisma.order.findUnique({
      where: { id: Number(id) },
    })
    res.json(order)
  } catch (error) {
    res.status(500).json({
      error,
      message: "Error fetching order",
      code: "P500",
    })
  }
}

export const addOrder = async (req: Request, res: Response) => {
  try {
    const { order } = req.body

    const orderItems = order.products.map(
      (product: { id: number; quantity: number }) => ({
        productId: product.id,
        quantity: product.quantity,
      })
    )

    const newOrder = await prisma.order.create({
      data: {
        name: order.name,
        email: order.email,
        phone: order.phone,
        total: order.total,
        status: "pending",
        items: orderItems,
      },
    })
    res.json(newOrder)
  } catch (error) {
    console.error("Order creation error:", error)
    res.status(500).json({
      error,
      message: "Database Error. Error creating order",
      code: "P500",
    })
  }
}
