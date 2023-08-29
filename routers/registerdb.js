import express from 'express'
import { registerController } from '../controllers/registerController.js'

export const registerdb = express.Router()

registerdb.use(express.json());

registerdb.post('/register',registerController)