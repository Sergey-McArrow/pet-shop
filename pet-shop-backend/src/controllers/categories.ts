import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"

const prisma = new PrismaClient()

export const getAllCategories = async (_req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany()
    res.json(categories)
  } catch (error) {
    res.status(500).json({
      error,
      message: "Error fetching categories",
      code: "P500",
    })
  }
}

export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const category = await prisma.category.findUnique({
      where: { id: Number(id) },
    })
    const products = await prisma.product.findMany({
      where: { categoryId: Number(id) },
    })
    res.json({ category, products })
  } catch (error) {
    res.status(500).json({
      error,
      message: "Error fetching category",
      code: "P500",
    })
  }
}
