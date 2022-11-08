const express = require("express");
const app=express();
const pool = require("../mysqlconnector");
const router = express.Router();


//api for logging user attendance
router.post("/log-attendance",function(req,res){
    
})


//Function to generate 5 digit random number
function randomNum(){
    let fiveDigitNum = Math.floor(Math.random() * 90000) + 10000;
    return fiveDigitNum;
}


