import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export const getAllCategoriies = async (_req: Request, res: Response) => {
  const categories = await prisma.categories.findMany()
  return res.json(categories)
}
