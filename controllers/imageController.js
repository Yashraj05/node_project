import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config({path:'/home/my/Desktop/express/.env'});
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET,

  });

 
export async function imageController(req,res)
{
    const result = await cloudinary.uploader.upload(req.file.path);

   res.json({message : "uploaded",source : result.secure_url});
}