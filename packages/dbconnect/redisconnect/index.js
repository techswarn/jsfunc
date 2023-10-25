const { createClient } = require("redis");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
//console.log(process.env.REDIS_URL);
const client = createClient({
  url: process.env.REDIS_URL,
});
client.on("error", (err) => console.log("Redis Client Error", err));

const redisConnect = async () => {
  try {
    await client.connect();
    console.log("Redis connection successfull ");
  } catch (error) {
    console.log("Redis error:" + error);
  }
};

const addvalue = async (data) => {
  await client.set("foo", data);
  const value = await client.get("foo");
  console.log(value);
  return value;
};

async function main(event, context) {
  console.log(event);
  console.log(context);

  redisConnect();
  const data = "sample";
  const res = await addvalue(data);
  console.log("output " + res);
  await client.disconnect();
  return {
    body: "Redis check",
  };
}
exports.main = main;
