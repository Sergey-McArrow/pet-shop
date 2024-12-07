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
const PORT = process.env.PORT || 3333

const allowedOrigins = [
  process.env.APP_URL,
  "http://localhost:5173",
  "http://localhost:3000",
  "https://pet-shop-ivory-alpha.vercel.app",
].filter(Boolean)

app.use(
  cors({
    origin: (
      origin: string | undefined,
      callback: (err: Error | null, allow?: boolean) => void
    ) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
      } else {
        callback(new Error("Not allowed by CORS"))
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
)

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
