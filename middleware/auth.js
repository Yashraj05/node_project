 export default function auth (req,res,next)
{
    if(req.query.limit === 'true')
    {
        next();
    }
    // else{
        // res.send("authentication");
        console.log("auth");
    // }
}