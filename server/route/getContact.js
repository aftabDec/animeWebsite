const express = require("express")
const router = express.Router();
const authUser = require("../middleware/authUserMiddle");
const {submitContactForm} = require("../Controller/ContactController.js");

router.route("/Contact").get(authUser,submitContactForm)

module.exports = router;
