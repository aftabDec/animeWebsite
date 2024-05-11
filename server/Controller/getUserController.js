const User = require("../models/UserModel") 
const getUser = async (req, res) => {
    try {
        const users = await User.find({},{password:0})
        return res.status(200).json(users);
    } catch (error) {
        
        console.error(error);
        res.status(500).json({ message: "Internal Server Error in getting users data" });
    }
}
module.exports = getUser