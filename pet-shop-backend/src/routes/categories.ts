import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export const categoriesRouter = express.Router()

categoriesRouter.get('/all', (_req, res) => {
  async function all() {
    const categories = await prisma.categories.findMany()
    res.json(categories)
  }
  all()
})
