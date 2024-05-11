const { Schema, model } = require("mongoose");
const User = require("../models/UserModel");
//  schema for contacts
const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
  
});


const Contact = model("Contact", contactSchema);

module.exports = Contact;
