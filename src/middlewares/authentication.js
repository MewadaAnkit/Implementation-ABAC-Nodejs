const jwt = require('jsonwebtoken')

const verifyToken = (req, res , next)=>{
    const authHeaders = req.headers.Authorization || req.headers.authorization

    if(authHeaders  && authHeaders.startsWith("Bearer")){
         const token = authHeaders.splits(" ")[1]
         if(!token){
           return res.status(401).json({
                status:401,
                message:"No token , Authorization denied"
            })
         }

         try {
            const decode = jwt.verify(token , process.env.JWT_SECRET);
            req.user = decode
            next()

         } catch (error) {
            res.status(400).json({
                status:400,
                message:"Invalid Token , Token is not valid"
            })
         }
    }else{
         return res.status(401).json({
             status:401,
             message:"No Token , Authorization Denied"
         })
    }
}


module.exports = verifyToken