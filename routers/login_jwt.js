import express from 'express';
import authenticateUser from '../middleware/authenticateUser.js';
import { generateToken } from '../middleware/generateToken.js';
import { loginjwtController } from '../controllers/loginjwtController.js';

export const login_jwt = express.Router();
login_jwt.use(express.json())

login_jwt.post('/loginjwt',authenticateUser ,loginjwtController)