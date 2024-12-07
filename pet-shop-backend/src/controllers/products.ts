import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"

const prisma = new PrismaClient()

export const getAllProducts = async (_req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany()
    res.json(products)
  } catch (error) {
    res.status(500).json({
      error,
      message: "Error fetching products",
      code: "P500",
    })
  }
}

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
    })
    res.json(product)
  } catch (error) {
    res.status(500).json({
      error,
      message: "Error fetching product",
      code: "P500",
    })
  }
}
