import  express from "express";
import checkIfUserExists from "../middleware/checkIfUserExists.js";
import { users } from "../app.js";
import { signupController } from "../controllers/signupController.js";

export const signup = express.Router();
signup.use(express.json());
signup.post('/signup',checkIfUserExists,signupController)