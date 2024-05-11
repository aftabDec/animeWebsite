const nodemailer = require('nodemailer');
const Contact = require('../models/contact');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'aftab6thsep@gmail.com', // your gmail address
        pass: 'sep6thaftab' // your gmail password or application-specific password
    }
});

const sendEmailNotification = async (name, email, message) => {
    try {
        // Send email notification
        await transporter.sendMail({
            from: 'aftab6thsep@gmail.com',
            to: 'your-email-address-to-receive-notifications@gmail.com', // your email address to receive notifications
            subject: 'New Message from Contact Form',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        });
    } catch (error) {
        console.error('Error sending email notification:', error);
    }
};

const submitContactForm = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Save contact message to database
        const newMessage = new Contact({
            name,
            email,
            message
        });
        await newMessage.save();

        // Send email notification
        await sendEmailNotification(name, email, message);

        res.status(200).json({ message: 'Contact message submitted successfully' });
    } catch (error) {
        console.error('Error submitting contact form:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {submitContactForm};
