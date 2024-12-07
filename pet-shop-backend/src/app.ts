import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { categoriesRouter } from "./routes/categories"
import { PrismaClient } from "@prisma/client"
import { productsRouter } from "./routes/products"
import { orderRouter } from "./routes/orders"

const prisma = new PrismaClient()
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

app.use("/categories", categoriesRouter)
app.use("/products", productsRouter)
app.use("/orders", orderRouter)

app.get("/health", (req, res) => {
  res.json({ status: "ok" })
})

if (process.env.VERCEL !== "1") {
  app.listen(PORT, async () => {
    try {
      await prisma.$connect()
      console.log("✅ Database connection established")
      console.log(`🚀 Server started on port ${PORT}`)
    } catch (error) {
      console.error("❌ Error connecting to the database:", error)
      process.exit(1)
    }
  })
}

export default app
