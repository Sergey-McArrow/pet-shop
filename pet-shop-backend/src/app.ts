import express from 'express'
import cors from 'cors'
import { sequelize } from './db'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT

if (!PORT) throw new Error('Cannot get .env variable')

app.use(cors({ origin: '*' }))
app.use(express.urlencoded())
app.use(express.json())

const start = async () => {
  try {
    await sequelize.sync().then(
      (result) => {
        /*console.log(result) */
      },
      (err) => console.log(err)
    )

    app.listen(PORT, () => {
      console.log(`\n\nServer started on ${PORT} port...`)
    })
  } catch (err) {
    console.log(err)
  }
}
start()
