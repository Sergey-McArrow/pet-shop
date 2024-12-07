import { PrismaClient } from "@prisma/client"
import * as fs from "fs"
import { fileURLToPath } from "url"
import { dirname, join } from "path"
import { config } from "dotenv"
config()

const __filename = fileURLToPath(process.argv[1])
const __dirname = dirname(__filename)

const prisma = new PrismaClient()

async function main() {
  // Read the SQL file
  const sqlFile = join(__dirname, "../../dumps/dump.sql")
  const sql = fs.readFileSync(sqlFile, "utf8")

  // Execute the SQL directly using Prisma's $executeRawUnsafe
  // Split the SQL into individual statements
  const statements = sql
    .split(";")
    .map((statement) => statement.trim())
    .filter((statement) => statement.length > 0)

  for (const statement of statements) {
    try {
      await prisma.$executeRawUnsafe(`${statement};`)
    } catch (error) {
      console.error(`Error executing statement: ${statement}`)
      console.error(error)
    }
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
