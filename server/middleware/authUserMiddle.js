const jwt = require("jsonwebtoken")
const User = require("../models/UserModel")

const authUser = async (req, res, next) => {
const token = req.header("Authorization")
    if(!token){
        return res.status(401).json({message:"token is not found"})
    }
    const jwtToken = token.replace("Bearer", "").trim() 
    console.log("token from authUSer middleware", jwtToken)

   
    next();
    try {
        const isVerified = jwt.verify(jwtToken,process.env.JWT_SECRET_KEY) 

       
        const userData = await User.findOne({email: isVerified.email}).select({password: 0})
        console.log(userData)

        req.token = token;
        req.user = userData;
        req.userID = userData._id; 

        
    } catch (error) {
        return res.status(401).json({message:"Anuthorize token"})
    }
    
}

module.exports = authUser