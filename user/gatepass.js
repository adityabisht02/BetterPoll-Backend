const express = require("express");
const app = express();

const pool = require("../mysqlconnector");
const router = express.Router();

//fs to convert base64 image to normal
const fs = require("fs");

router.post("/upload-gatepass-request", function (req, res) {
  //we have to send everyone the same menu depending on the date
  const encodedimage = req.body.image;

  const imageBuffer = new Buffer.from(encodedimage, "base64");
  console.log(imageBuffer);
  fs.writeFileSync("uploadedimg.jpeg", imageBuffer);
  return res.send("image uploaded successfully");
});

module.exports = router;
