export function loginController(req,res)
{
    res.send(`user is given the access ${req.user.name}`);
    
}