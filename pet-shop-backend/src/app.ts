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
const PORT = process.env.PORT

if (!PORT) throw new Error("Cannot get .env variable")

app.use(cors({ origin: "*" }))
app.use(express.urlencoded())
app.use(express.json())
app.use(express.static("public"))

app.use("/categories", categoriesRouter)
app.use("/products", productsRouter)
app.use("/orders", orderRouter)
// app.use(errorHandler)

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
