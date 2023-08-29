import express from "express";
import { queryPController } from "../controllers/queryPController.js";

export const  q_router = express.Router();

q_router.get('/queryparam',queryPController)
