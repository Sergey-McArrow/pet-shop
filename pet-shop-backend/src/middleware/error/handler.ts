import { NextFunction, Request, Response } from "express"
import { ApiError } from "./types"

export const errorHandler = (
  err: Error | ApiError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error(err.stack)

  if (err instanceof ApiError) {
    return res.status(err.status).json({
      error: err.name,
      message: err.message,
      code: err.code,
    })
  }

  if (
    "code" in err &&
    typeof err.code === "string" &&
    err.code.startsWith("P")
  ) {
    return res.status(400).json({
      error: "Database Error",
      message: err.message,
      code: err.code,
    })
  }

  res.status(500).json({
    error: "Internal Server Error",
    message: err.message || "Something went wrong",
  })
}
