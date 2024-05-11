const express = require("express");
const router = express.Router();
const Popular = require("../Controller/PopularAnime");

router.route("/Popular").get((req, res) => {
    console.log("Request made to /Popular");
    Popular(req, res);
});

module.exports = router;