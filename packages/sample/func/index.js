const name = require("./name")

// import name from "./../../../lib/name.js"

console.log(name)

async function main(args) {
    console.log('-----------Logging values-----')
    console.log(args?.__ow_body);
    console.log(args?.__ow_headers);
    console.log(args?.__ow_body);
    console.log(args?.__ow_path);
    console.log('-----------Logging values-----')

    let message = 'Function executed'
    return {"body": message}
  }

exports.main = main