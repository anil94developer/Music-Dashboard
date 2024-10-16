// import dotenv from "dotenv"
// import connectDB from "./db/index.js";
// import {app} from './app.js'

const dotenv = require('dotenv')
const connectDB = require('./app.js')
const app = require('./app.js')

dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})
