import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export const router = express.Router()

router.get('/all', (_req, res) => {
  async function all() {
    const categories = await prisma.categories.findMany()
    res.json(categories)
  }
  all()
})