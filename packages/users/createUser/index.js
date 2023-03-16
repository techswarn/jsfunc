const name = require("./name")
const mongoose = require('mongoose');


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

    try{
      const swarn = await Person.create({name: "Swarn"})
      console.log(swarn)
      return {
        statusCode : 200,
        body: swarn
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