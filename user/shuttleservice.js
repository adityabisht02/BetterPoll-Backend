const express= require("express");
var router = express.Router();
//mysql connector pool
const pool=require("../mysqlconnector");

router.get("/view-shuttles",function (req, res){
    let sql='SELECT * FROM shuttles';
    pool.query(sql, function (error, results, fields) {
        if (error) throw error;
        res.status(201).json({success: true, results, msg: "Shuttles information retrieved successfully"});
    });

})
module.exports = router;