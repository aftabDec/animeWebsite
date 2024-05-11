const express = require("express");
const router = express.Router();
const adminController = require("../Controller/AdminController"); // Import the admin controller
router.route("/Admin").get( adminController);

module.exports = router;
