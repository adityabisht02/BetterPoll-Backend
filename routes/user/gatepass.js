const express = require("express");
const app = express();
//import AWS SDK Setup
const AWS = require("../../awssetup");
const pool = require("../../mysqlconnector");
const router = express.Router();
const s3 = new AWS.S3();

//fs to convert base64 image to normal
const fs = require("fs");

function uploadToS3(imagename) {
  const bucketName = "betterpoll-bucket";
  const filePath = "./" + imagename;
  const keyName = "gatepass/" + imagename;
  // Read the file
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      console.log(err);
      return;
    }

    // Set the parameters for the S3 upload
    const params = {
      Bucket: bucketName,
      Key: keyName,
      Body: fileData, // Set the file to public-read
    };

    // Upload the file to S3
    s3.upload(params, (err, data) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log("File uploaded successfully. File location:", data.Location);
    });
  });
}
router.post("/upload-gatepass-request", function (req, res) {
  //we have to send everyone the same menu depending on the date
  const { id, image } = req.body;
  console.log(image);
  const imageBuffer = new Buffer.from(image, "base64");
  console.log(imageBuffer);
  var imagename = "gatepassimg";
  fs.writeFileSync(imagename, imageBuffer);
  const url = uploadToS3(imagename);

  return res.send(url + " here is where u access the file");
});

module.exports = router;
