const express= require("express");
var router = express.Router();
//mysql connector pool
const pool=require("../mysqlconnector");

router.post("/login", function(req, res){
    //we are only verifying the user through their email 
    const { email } = req.body;
    console.log(email);
    if(!email){
        return res.json({success: false, message:"Enter an email id"});
    }    
    pool.query("SELECT * FROM users WHERE email = ?", email, function (error, results, fields){
        if (results.length==0){
            return res.json({success: false, message:"User does not exist contact ur admin"});
        }
        return res.status(201).json({success: true, results, msg: "You have successfully logged in"});
    });
});

module.exports = router;
