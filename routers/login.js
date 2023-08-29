import express from "express";
import authenticateUser from "../middleware/authenticateUser.js";
import { loginController } from "../controllers/loginController.js";

export const login = express.Router();
login.use(express.json())

login.post('/login',authenticateUser,loginController)
