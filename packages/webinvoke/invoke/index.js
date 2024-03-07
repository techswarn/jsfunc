const sgMail = require("@sendgrid/mail");

// Assuming SENDGRID_API_KEY and SENDER_EMAIL are set as environment variables
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function main(event, context) {
  console.log(event);
  console.log(context);
  // const details = {
  //   to: "s.swarn619@gmail.com",
  //   templateId: "Some ramdom id",
  //   dynamicData: "SOME DATA",
  //   unsubscribeGroupId: "SOME DATA",
  //   emergencyByPass: "SOME DATA",
  // };
  // // Construct the email object
  // const msg = {
  //   to: details.to,
  //   from: process.env.SENDER_EMAIL,
  //   template_id: details.templateId,
  //   dynamic_template_data: details.dynamicData,
  //   mail_settings: {
  //     bypass_list_management: { enable: details.emergencyByPass },
  //   },
  //   ...(details.unsubscribeGroupId
  //     ? { asm: { group_id: details.unsubscribeGroupId } }
  //     : {}),
  // };

  try {
    // Send the email using SendGrid
    //   await sgMail.send(msg);
    return {
      body: "testing",
      statusCode: 201,
    };
  } catch (error) {
    console.error(error);
    response = {
      body: { error: "Failed to send email", details: error.message },
    };
  }
}

exports.main = main;
