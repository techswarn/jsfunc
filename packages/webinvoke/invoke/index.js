async function main(event, context) {
  console.log(event);
  console.log(context);

  return {
    body: {
      name: "Swan",
      email: "admin@swarn1.com",
    },
    statusCode: 201,
    headers: {
      "access-control-allow-origin:": "https://developer.mozilla.org",
    },
  };
}

exports.main = main;
