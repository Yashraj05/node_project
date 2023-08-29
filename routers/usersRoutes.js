import express from "express";
import { router } from "./normal_params.js";
import { q_router } from "./queryparams.js";
import { b_router } from "./body.js";
import { m_router } from "./m_router.js";
import { signup } from "./signup.js";
import { login } from "./login.js";
import { login_jwt } from "./login_jwt.js";
import { authorize } from "./authorize.js";
import { upload_r } from "./upload.js";
import { cloudinary_router } from "./cloud.js";
import { video_router } from "./videoupload.js";
import { registerdb } from "./registerdb.js";
import { dblogin } from "./dblogin.js";

export const userRoutes = express.Router()

userRoutes.use('/n',router);
userRoutes.use('/q',q_router);
userRoutes.use('/b',b_router);
userRoutes.use('/m',m_router);
userRoutes.use('/s',signup);
userRoutes.use('/l',login);
userRoutes.use('/ljwt',login_jwt);
userRoutes.use('/auth',authorize);
userRoutes.use('/file',upload_r);
userRoutes.use('/img',cloudinary_router)
userRoutes.use('/vid',video_router)
userRoutes.use('/dbr',registerdb);
userRoutes.use('/dbl',dblogin);
