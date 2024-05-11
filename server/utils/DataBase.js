const mongoose= require("mongoose")
const URI = "mongodb://localhost:27017/Anime_admin"


const connectDb = async () => {
    try {
        await mongoose.connect(URI,)
        console.log("database is connected")
    } catch (error) {
        console.error("Database Connection failed")
        process.exit(0)
    }
}
module.exports = connectDb;