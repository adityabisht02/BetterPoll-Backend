const express = require("express");
const pool = require("../mysqlconnector");
const router = express.Router();


const addNewUser = (req, res) => {
    
}

router.post("/add-new-user", (req,res)=>{
    const {name, email, phone} = req.body;
    console.log(req.body);
    let sql = `INSERT INTO users (name, email, phone) VALUES (?, ?, ?);`;
    pool.query(sql, [name, email, phone], function (error, results, fields) {
        if (error) throw error;
        res.status(201).json({success: true, results, msg: "User created successfully"});
    });
});

router.post("/get-user", function (req, res) {
    console.log(req.body)
    res.send(req.body)
})
module.exports = router;