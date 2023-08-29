export function queryPController(req,res)
{
    req.body = "express.js"
    res.send(`my name is ${req.query.name} and my age is ${req.query.age} and i am learning ${req.body}`);
}