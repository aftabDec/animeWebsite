// models/User.js
const mongoose = require('mongoose');


// adding this to generatw token
const jwt = require('jsonwebtoken');


//  adding bcrypt to hashing the password /
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
       
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false 
    }
});

userSchema.pre("save",async function(next){
    if(!this.isModified('password')){
        return next()
    }
    try {
        const hashPass = await bcrypt.hash(this.password,10)
        this.password = hashPass
        next()
    } catch (error) {
        next(error);
    }
})

userSchema.methods.generateToken = function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        }, process.env.JWT_SECRET_KEY);
    } catch (error) {
        console.error(error);
    }
};


const User = mongoose.model('User', userSchema);

module.exports = User;
