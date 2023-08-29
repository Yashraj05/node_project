import { User } from "../models/user.js";

export async function registerController(req,res)
{
    try {
        const {name,password} = req.body;

        const student  = new User({
            name,
            password
        });
    
        await student.save();
    
        res.send("Student registered successfully");
    } catch (error) {

        if (error.code === 11000) {
            res.json({ message: 'Student with this name already exists, please choose a different name.' });
          } else {
            res.json({ message: 'An error occurred' });
          }
        
    }
   
}