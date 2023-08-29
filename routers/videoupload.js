import express from 'express'
import { videoController } from "../controllers/videoController.js";
import { upload } from "../middleware/multer.js";


export const video_router = express.Router();

video_router.post('/video',upload.single('file'),videoController)