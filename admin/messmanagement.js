const express = require("express");
const app=express();
const pool = require("../mysqlconnector");
const router = express.Router();
const bodyParser = require("body-parser");

app.use(bodyParser.json());





//Function to generate 5 digit random number
function randomNum(){
    let fiveDigitNum = Math.floor(Math.random() * 90000) + 10000;
    return fiveDigitNum;
}


module.exports=router;