import { Sequelize } from '@sequelize/core'
import { PostgresDialect } from '@sequelize/postgres'

export const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: 'pet-shop-backend',
  user: 'mcarrow',
  password: '12345',
  host: 'localhost',
  port: 3333,
  ssl: true,
  clientMinMessages: 'notice',
})
