const name = require("./name")
const mongoose = require('mongoose');
const { BinaryReader } = require('@protobuf-ts/runtime')

const dotenv = require("dotenv")

dotenv.config({path: './../config.env'})
console.log(process.env.LOG_DESTINATIONS)

const dbConnect = require("./db")
// require("./db")
console.log(name)

dbConnect()

const PersonSchema = new mongoose.Schema({
  name: String
});

const Person = mongoose.model('Person', PersonSchema);

async function main(args) {
    console.log('-----------Logging values-----')
    console.log(args?.__ow_body);
    console.log(args?.__ow_headers);
    console.log(args?.__ow_path);
    console.log('-----------Logging values-----')
    const reader = new BinaryReader(Buffer.from("TEST"));
    console.log(reader.len);

    if(!args?.__ow_body) {
      return  {
        statusCode: 404,
        body: "Request object not found"
      }
    }
    const reqBody = JSON.parse(args?.__ow_body)
    
    if(reqBody?.name === "") {
      return  {
        statusCode: 404,
        body: "name missing in request body"
      }
    }

    try{
      const user = await Person.create({name: reqBody?.name})
      console.log(user)
      return {
        statusCode : 200,
        body: `${user.name} created`
      };
    }
    catch(err){
      console.log(err)
      return  {
        statusCode: 500,
        body: err.message
      }
    }
}

exports.main = main