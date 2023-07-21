const name = require("./name");
const mongoose = require("mongoose");
const { BinaryReader } = require("@protobuf-ts/runtime");

const dotenv = require("dotenv");

dotenv.config({ path: "./../config.env" });
console.log(process.env.LOG_DESTINATIONS);

const dbConnect = require("./db");

console.log(name);

dbConnect();

const PersonSchema = new mongoose.Schema({
  name: String,
});

const Person = mongoose.model("Person", PersonSchema);

async function main(event, context) {
  console.log("-----------Logging values-----");
  console.log(event);
  console.log(context);
  console.log("-----------Logging values-----");

  if (!event.name) {
    return {
      statusCode: 404,
      body: "name missing in request body",
    };
  }
  const username = event.name;
  try {
    const user = await Person.create({ name: username });
    console.log(user);
    return {
      statusCode: 200,
      body: `${user.name} created`,
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: err.message,
    };
  }
}

exports.main = main;
