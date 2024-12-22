const User = require('../models/user.model')
const Jwt = require('jsonwebtoken')

// Register Controller
const Register = async(req,res)=>{
  try {
    
  } catch (error) {
    res.status(500).json({
        status:500,
        message:"Internal Server Error"
    })
  }
}

const LoginController = async(req,res)=>{
   try {
      const  {email , password} = req.body;
      const user = await user.findOne({email , password})
      if(!user){
        return res.status(401).json({
            status:401,
            message:"Invalid email or Password"
        })
      }

    const token = Jwt.sign(user,process.env.JWT_SECRET ,   { expiresIn: '1h' }  );



    res.json()
    


   } catch (error) {
    res.status(500).json({
        status:500,
        message:"Internal Server Error"
    })
   }
}











module.exports = { Register , LoginController}