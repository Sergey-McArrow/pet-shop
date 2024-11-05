import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { categoriesRouter } from './src/routes/categories'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
dotenv.config()

const app = express()
const PORT = process.env.PORT

if (!PORT) throw new Error('Cannot get .env variable')

app.use(cors({ origin: '*' }))
app.use(express.urlencoded())
app.use(express.json())
app.get('/categories/all', async (_req, res) => {
  const categories = await prisma.categories.findMany()
  return res.json(categories)
})

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`\nServer started on ${PORT} port...`)
    })
  } catch (err) {
    console.log(err)
  }
}
start()
