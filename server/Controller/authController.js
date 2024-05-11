//importing User model to add this on User.find to check wether email is exist or not /
const User = require('../models/UserModel.js');
const bcrypt = require("bcrypt")




//Home /
const home = async (req, res) => {
    try {
       
        res.status(200).send( 'its home page' );
    } catch (error) {
        res.status(400).send( 'something went wrong' );
    }
}



// register logic //
const register = async (req, res) => {
    try {
        const { username, email, password, confirmPassword} = req.body;
            if(password !== confirmPassword){
                return res.status(400).json({ message: 'confirm password is wrong' });
            }

        // Check if the username already exists in the database
        const userExist = await User.findOne({ username });
        // Check if the email already exists in the database
        const emailExist = await User.findOne({ email });

        if (userExist && emailExist) {
            // If both username and email exist, return a 400 response with both error messages
            return res.status(400).json({ message: 'Username and email already exist. Please choose different ones.' });
        } else if (userExist) {
            // If only username exists, return a 400 response with username error message
            return res.status(400).json({ message: 'Username already exists. Please choose a different username.' });
        } else if (emailExist) {
            // If only email exists, return a 400 response with email error message
            return res.status(400).json({ message: 'Email already exists. Please choose a different email.' });
        }

        // If both username and email are unique, create a new user
        const newUser = await User.create({ username, email, password });

        // Respond with success message
        res.status(200).json({ message: 'Registration successful',token: 
        newUser.generateToken(), userId:newUser._id.toString() });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Registration failed. Please try again later' });
    }
}


// login logic //
const login = async (req, res) => {
    try {
        console.log('Request body:', req.body);
        const {  email, password } = req.body;
        
        const user = await User.findOne({ email });

        if(!user){
         console.log('User not found');
         return res.status(400).json({ message: 'Invalid username/email or password' });
        }
        const isValidPassword = await bcrypt.compare(password, user.password)
        if(!isValidPassword){
            console.log('Invalid password');
            return res.status(400).json({ message: 'Invalid username/email or password' });
        }
        // Generate a token for the authenticated user
        const token = user.generateToken();
        console.log('Login successful');
        res.status(200).json(  {message: 'Login successful', token,userId:user._id.toString()}  );
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Login failed. Please try again later' });
    
    }
}
      // user delete logic //
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({ _id: id });
        // Send a success response after deletion
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        // Send an error response if deletion fails
        res.status(500).json({ message: 'Failed to delete user. Please try again later' });
    }
}


module.exports = {home, register, login ,deleteUser}