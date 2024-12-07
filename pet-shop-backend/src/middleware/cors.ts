import { Request, Response, NextFunction } from "express"
import cors from "cors"

const ALLOWED_ORIGIN = "https://pet-shop-ivory-alpha.vercel.app"
const LOCAL_ORIGIN = "http://localhost:5173"

export const corsOptions = cors({
  origin: [ALLOWED_ORIGIN, LOCAL_ORIGIN],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
})

export const corsHeaders = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const origin = req.headers.origin
  if (origin === ALLOWED_ORIGIN || origin === LOCAL_ORIGIN) {
    res.header("Access-Control-Allow-Origin", origin)
  }
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization")
  res.header("Access-Control-Allow-Credentials", "true")
  next()
}
