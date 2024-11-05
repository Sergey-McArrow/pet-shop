import { Router } from 'express'
import { getAllCategoriies } from '../controllers/catgories'

export const categoriesRouter = Router()

categoriesRouter.get('/all', getAllCategoriies)
