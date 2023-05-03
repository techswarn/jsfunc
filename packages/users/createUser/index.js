const name = require("./name")
const mongoose = require('mongoose');
// const sqlite3 = require("sqlite3")
console.log(LOG_DESTINATIONS)
const dbConnect = require("./db")
// require("./db")
console.log(name)

dbConnect()

const PersonSchema = new mongoose.Schema({
  name: String
});

const Person = mongoose.model('Person', PersonSchema);


// const connectSqlite = async () => {
//   const db = await sqlite3.open({
//     filename: '/tmp/database.db',
//     driver: sqlite3.Database
//   })
//   console.log(db)
// }

// connectSqlite()

async function main(args) {
    console.log('-----------Logging values-----')
    console.log(args?.__ow_body);
    console.log(args?.__ow_headers);
    console.log(args?.__ow_path);
    console.log('-----------Logging values-----')
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