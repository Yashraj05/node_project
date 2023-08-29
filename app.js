import express from "express";
import dotenv  from "dotenv"
import { userRoutes } from "./routers/usersRoutes.js";
import connectDB from "./helpers/mongoose.js";
import { product } from "./routers/productsRoutes.js";

dotenv.config({path:'/home/my/Desktop/express/.env'});
const port = process.env.PORT
const app = express();
export const secret_key = "my key";
export const users = [];
connectDB();
app.get('/',(req,res)=>{
    res.send("hello world i am yashraj")
})
app.listen(port,()=>{
    console.log("hello world");
})

app.use('/users',userRoutes);
app.use('/products',product);
// app.use('/students',stu)

