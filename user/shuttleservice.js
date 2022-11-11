const express= require("express");
var router = express.Router();
//mysql connector pool
const pool=require("../mysqlconnector");

//view available shuttles
router.get("/view-shuttles",function (req, res){
    let sql='SELECT * FROM shuttles';
    pool.query(sql, function (error, results, fields) {
        if (error){
            return res.status(400).json({success:false,msg:"Error while making SQL query"});
        };
        return res.status(201).json({success: true, results, msg: "Shuttles information retrieved"});
    });

});

//book-shuttle







module.exports = router;