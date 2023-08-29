import express from "express";
import { bodyController } from "../controllers/bodyContoller.js";

export const b_router = express.Router();
b_router.use(express.json());
b_router.use(express.urlencoded({ extended: true }));
b_router.post('/body',bodyController)