console.log("db file here----")
const mongoose = require('mongoose');
const dotenv = require("dotenv")

dotenv.config({path: './../config.env'})


const DB = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
)

const dbConnect =  async() => {
    try{
       await mongoose
        .connect(DB, {
          useNewUrlParser: true,
        })
        .then(() => console.log('MongoDB connections successful!'));
    }
    catch(err) {
        console.log(err)
}}

module.exports = dbConnect




