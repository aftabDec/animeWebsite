const {model, Schema,  mongoose } = require("mongoose");
const PopularAnimeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = model("PopularAnime", PopularAnimeSchema);
