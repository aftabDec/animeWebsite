const express = require("express")
const router = express.Router();
const getUser = require("../Controller/getUserController");
const authUser = require("../middleware/authUserMiddle");
const {deleteUser} = require("../Controller/authController");
const adminController = require("../Controller/AdminController");

router.route("/Alluser").get(authUser, getUser,adminController);
router.route("/alluser/Delete/:Id").delete(authUser, deleteUser,adminController);
module.exports = router;
