const User = require("../models/UserModel")
const admin = async (req, res) => {
   try {
       const users = await User.find({});
       res.json(users);
   } catch (error) {
       console.error("Error in admin:", error.message);
       res.status(500).json({ error: 'Internal Server Error' });
   }
};
module.exports = admin