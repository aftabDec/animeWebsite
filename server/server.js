require("dotenv").config()
var cors = require('cors')
const express = require('express');
const app = express();
const router = require("./route/AuthRouter");
const connectDb = require("./utils/DataBase");
 const Popular = require("./route/animeRoute")
const allUser = require("./route/getUser")
const ContactRoute = require("./route/getContact")
const IsAdmin = require("./route/AdminRoute")



// handling cors policy
const corsOptions = {
    origin: 'http://localhost:5173',
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
   credentials: true,
   
  }
app.use(cors(corsOptions))
app.use(express.json())


// Define routes
app.use('/kitsune',ContactRoute)
app.use('/kitsune',IsAdmin)
app.use('/api/kitsune',Popular)
app.use('/api/kitsune',allUser)
app.use('/api/kitsune',router)



// Start the server
connectDb().then(()=>{
const port =  3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
})