async function main(event, context) {
  console.log(event);
  console.log(context);

  return {
    body: "webinvoke",
  };
}

exports.main = main;
