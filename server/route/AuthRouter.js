// route/router.js
const express = require("express");
const router = express.Router();
const { signUpSchema,loginSchema} = require("../validator/authValid.js")
const {home, register, login} = require("../Controller/authController.js")
const validate = require("../middleware/authMiddle.js")


router.route('/home').get(home);
router.route("/register").post(validate(signUpSchema),register)
router.route("/login").post(validate(loginSchema),login)


module.exports = router;
