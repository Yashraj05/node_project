import express from 'express'
import { verifyToken } from '../middleware/verifyToken.js';
import { authorizeController } from '../controllers/authorizeController.js';

export const authorize = express.Router();

authorize.get('/service',verifyToken,authorizeController)