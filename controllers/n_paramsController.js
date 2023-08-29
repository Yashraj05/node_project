export function n_paramsController(req,res){
    res.send(`hi this is : ${req.params.username}  with id : ${req.params.id} : `)
}