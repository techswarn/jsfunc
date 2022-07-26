function main(args) {
    console.log('-----------Logging values-----')
    console.log(args.__ow_body);
    console.log(args.__ow_headers);
    console.log('-----------Logging values-----')

    const body = JSON.parse(args.__ow_body);
    
    let name = body.name || 'stranger'
    let greeting = 'Hello ' + name + '!'
    console.log(greeting)
    return {"body": greeting}
  }
  