export function bodyController(req,res){
    
    const data = req.body;
 
    console.log("Name: ", data.name);
    console.log("Age: ", data.age);
    console.log("Gender: ", data.gender);
 
    res.send(`Name : ${data.name} , Age:${data.age},Gender : ${data.gender}`);
}