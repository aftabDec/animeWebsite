const express = require("express");
const router = express.Router();
const Popular = require("../models/PopularAM");

router.route("/Popular").get(async (req, res) => {
    try {
        // Retrieve all popular anime from the database
        const popularAnime = await Popular.find();

        // Checking if any popular anime were found
        if (popularAnime.length === 0) {
            return res.status(404).json({ message: "Popular anime not found" });
        }

        // Respond with the retrieved popular anime
        res.status(200).json(popularAnime);
    } catch (error) {
        console.error("Error fetching popular anime:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
