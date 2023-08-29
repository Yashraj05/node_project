import { User } from "../models/user.js";

export async function dbloginController(req,res)
{
   
        
        const {name,password} = req.body;
        const student = await  User.findOne({ password });
        console.log(await User.find());
        
        if(student)
        {
            res.json({message : "student logged in",student})
        }
        else{
            res.send("not a valid user");
        }

    

}