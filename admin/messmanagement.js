const express = require("express");
const app=express();
const pool = require("../mysqlconnector");
const router = express.Router();


//api for logging user attendance on admin device, attendance will be taken on  basis of code entered
router.post("/log-attendance",function(req,res){
    const id=req.body.code; //basically userid

    pool.query("SELECT * FROM users WHERE id = ?", id, function (error, results, fields){
        if (results.length==0){
            return res.json({success: false, msg:"User is not registered !!"});
        }
        //we can display the name of the user if he exists
        const message="Enjoy your meal "+results[0].name+" !";

        return res.json({success: true, msg: message});
    });

})


//api for editing mess menu
router.post("/edit-menu",function (req,res) {
    const {day,breakfast,lunch,snacks,dinner}=req.body;

    // update statment
    let sql = `UPDATE menus SET breakfastMenu = ?,lunchMenu=?,snacksMenu=?,dinnerMenu=? WHERE day = ?`;
    pool.query(sql, [breakfast,lunch,snacks,dinner,day], function (error, results){
        if (results.length==0){
            return res.json({success: false, msg:"Something went wrong"});
        }
       

        return res.json({success: true, msg: "Menu updated"});
    });

})

module.exports=router;

