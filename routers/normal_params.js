import express from "express";
import { n_paramsController } from "../controllers/n_paramsController.js";

export const router  =  express.Router();


router.get('/:id/:username',n_paramsController)


