import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { categoriesRouter } from './src/routes/categories'
import { PrismaClient } from '@prisma/client'
import { getAllCategoriies } from './src/controllers/catgories'

const prisma = new PrismaClient()
dotenv.config()

const app = express()
const PORT = process.env.PORT

if (!PORT) throw new Error('Cannot get .env variable')

app.use(cors({ origin: '*' }))
app.use(express.urlencoded())
app.use(express.json())
app.get('/categories/all', async (_req, res) => {
  getAllCategoriies(_req, res)
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
