const express = require("express");
const app=express();
const pool = require("../mysqlconnector");
const router = express.Router();
const bodyParser = require("body-parser");

const jsonParser = bodyParser.json();

const addShuttle = async (req, res) => {
    const busNumber = req.body.busno;
    const trip = req.body.trip;

    // const sqlquery="INSERT INTO `shuttles` (`busno`, `tripName`) VALUES ("+ busNumber+","+ trip+")"
    const sqlquery = "INSERT INTO shuttles (`busno','tripName') VALUES ('1234','camous to iffco')"
    pool.query(sqlquery, function (error, results, fields) {
        if (error) throw error;
        res.status(201).json({success: true, results, msg: "Shuttle created successfully"});
    });
}


router.post("/add-shuttle",jsonParser,addShuttle);

module.exports=router;