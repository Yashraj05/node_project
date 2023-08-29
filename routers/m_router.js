import express from "express";
import logger from "../middleware/logger.js";
import auth from "../middleware/auth.js";
import { middlewareController } from "../controllers/MiddlewareController.js";

export const m_router = express.Router();

m_router.use(logger);

m_router.get('/mw',auth,middlewareController)