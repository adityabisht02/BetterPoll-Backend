require("dotenv").config();
// import entire SDK
const AWS = require("aws-sdk");
const fs = require("fs");
// Configure the AWS SDK
AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION,
});

function checkModeration() {
  const rekognition = new AWS.Rekognition();
  // Load the image file
  const imgBytes = fs.readFileSync("./drug_overdose-one_one.jpg");
  // Set up the request parameters
  const params = {Image: {
      Bytes: imgBytes,
    },MinConfidence: 50,};
  // Call the detectModerationLabels method
  rekognition.detectModerationLabels(params, (err, data) => {
    if (err) {console.log(err, err.stack);} else {
      //array of objects with ModerationLabels and
      const arr = data.ModerationLabels;
      for (var i = 0; i < arr.length; i++) {
        const parent = arr[i].ParentName;
        const child = arr[i].Name;
        if (parent == "Violence" ||
          child == "Violence" ||
          parent == "Visually Disturbing" ||
          parent == "Explicit Nudity" ||
          child == "Nudity" ||
          parent == "Drugs" ||
          parent == "Rude Gestures") {
          console.log("This image violates guidelines ", parent);}}}});
}

checkModeration();
module.exports = AWS;
