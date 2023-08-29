import express from "express";

import { upload } from "../middleware/multer.js";
import { imageController } from "../controllers/imageController.js";

export const cloudinary_router = express.Router();

cloudinary_router.post('/image',upload.single('file'),imageController)
