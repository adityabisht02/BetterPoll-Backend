const express = require("express");
const app=express();
const pool = require("../mysqlconnector");
const router = express.Router();


//api for logging user attendance on admin device, attendance will be taken on  basis of code entered
router.post("/log-attendance",function(req,res){
    const id=req.body.id; //basically userid

    pool.query("SELECT * FROM users WHERE id = ?", id, function (error, results, fields){
        if (results.length==0){
            return res.json({success: false, msg:"User is not registered !!"});
        }
        //we can display the name of the user if he exists
        const message="Enjoy your meal "+results[0].name+" !";

        return res.json({success: true, msg: message});
    });

})


//Function to generate 5 digit random number
function randomNum(){
    let fiveDigitNum = Math.floor(Math.random() * 90000) + 10000;
    return fiveDigitNum;
}

module.exports=router;

