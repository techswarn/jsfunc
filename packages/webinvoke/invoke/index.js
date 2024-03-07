const sgMail = require("@sendgrid/mail");

async function main(event, context) {
  console.log(event);
  console.log(context);

  return {
    body: {
      name: "Swan",
      email: "admin@swarn1.com",
    },
    statusCode: 201,
  };
}

exports.main = main;
