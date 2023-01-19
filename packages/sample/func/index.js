//const name = require("./name")
const { Configuration, OpenAIApi } = require("openai");
// import name from "./../../../lib/name.js"

// console.log(name)

async function main(args) {
    // console.log('-----------Logging values-----')
    // console.log(args?.__ow_body);
    // console.log(args?.__ow_headers);
    // console.log('-----------Logging values-----')


    try {
      const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);
      
      const completion = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: "Hello world",
      });
      console.log(completion.data.choices[0].text);

    }catch(err){
      console.log(err)
    }

    let message = 'Function executed'
    return {"body": message}
  }

exports.main = main