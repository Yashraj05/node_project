import express from 'express';
import { upload } from '../middleware/multer.js';
import { fileController } from '../controllers/fileController.js';
export const upload_r = express();

upload_r.post('/upload',upload.array('files',3),fileController);