import { S3 } from "@aws-sdk/client-s3";

const s3Client = new S3({
  forcePathStyle: false, // Configures to use subdomain/virtual calling format.
  endpoint: "https://nyc3.digitaloceanspaces.com",
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.ACCESS_ID,
    secretAccessKey: process.env.ACCESS_SECRET_KEY,
  },
});

const createBucketParams = (file, content) => {
  return {
    Bucket: "backend",
    Key: file,
    Body: content,
  };
};

async function main(event, context) {
  console.log(event);
  console.log(context);
  try {
    if (uploadInput.files[0].name === null) {
      console.log("Please choose file");
    }
    const data = await s3Client.send(new PutObjectCommand(bucketParams));
    console.log(
      "Successfully uploaded object: " +
        bucketParams.Bucket +
        "/" +
        bucketParams.Key
    );
    alert.classList.add("alert-success");
    alert.innerHTML =
      "Successfully uploaded object: " +
      bucketParams.Bucket +
      "/" +
      bucketParams.Key;
    return data;
  } catch (err) {
    console.log("Error", err);
    alert.innerHTML = "Error, please check console for more details";
  }
  console.log("uploading");

  return {
    body: "file uploaded",
  };
}

exports.main = main;
