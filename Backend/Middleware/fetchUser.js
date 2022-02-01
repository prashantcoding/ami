var jwt=require('jsonwebtoken');
const fetchuser=(req,res,next)=>{
    
    //get the user from the jwt token and appen id to usr applicaiton
    // console.log("FetchRunning");
    // console.log(req.header);
    const token=req.header('Auth_token');
    if(!token){
        
        res.send({error:"please login "});
    }
    try {
        const data =jwt.verify(token,process.env.JWT_SECRET);
            
        req.body.id=data.user.id;
        next();
    } catch (error) {
       
        res.send({error:"please login "});
    }
    
}
module.exports=fetchuser;