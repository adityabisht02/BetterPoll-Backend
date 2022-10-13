const express = require("express");
const pool = require("../mysqlconnector");
const router = express.Router();




router.post("/add-shuttle",async(req, res) => {
    const busNumber = req.body.busno;
    const trip = req.body.trip;

    // const sqlquery="INSERT INTO `shuttles` (`busno`, `tripName`) VALUES ("+ busNumber+","+ trip+")"
    const sqlquery = "INSERT INTO shuttles (busno,tripName) VALUES (?,?)"
    pool.query(sqlquery,[busNumber,trip], function (error, results, fields) {
        if (error) throw error;
        res.status(201).json({success: true, results, msg: "Shuttle created successfully"});
    });
});

module.exports=router;