/**
 * API entry programme
 */
const express = require('express');
require('dotenv'.config);
const connectDB = require('.config/db');
const router = require('.routes');
const cors = require('cors')
const cookieParser = require('cookie-parser')

/**
 * Express App
 */
const app = express();
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}))
app.use(express.json())
app.use(cookieParser())

/**
 * App Router
 */
app.use("/api", router);

/**
 * Port
 */
const PORT = 8080 || process.env.PORT


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running "+PORT)
    })
})
