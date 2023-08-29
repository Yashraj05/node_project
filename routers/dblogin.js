import express from "express";
import { dbloginController } from "../controllers/dbloginController.js";

export const dblogin  = express.Router()
dblogin.use(express.json());

dblogin.post("/dblogin",dbloginController)