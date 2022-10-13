const express = require("express");
const pool = require("../mysqlconnector");
const router = express.Router();


router.post("/add-new-user", (req,res)=>{
    const {name, email, phone} = req.body;
    let sql = `INSERT INTO users (name, email, phone) VALUES (?, ?, ?);`;
    pool.query(sql, [name, email, phone], function (error, results, fields) {
        if (error) throw error;
        res.status(201).json({success: true, results, msg: "User created successfully"});
    });
});

router.get("/get-user-details", function (req, res) {
    const username = req.body;
    if(!username){
        return res.status(400).json({success: false,msg:"Enter a valid user!"});
    }
    let sql='SELECT * FROM users WHERE name = ?';

    pool.query(sql,username,function (error, results, fields) {
        if (error) throw error;
        res.status(201).json({success: true, results, msg: "User retrieved successfully"});
    });
})

router.get("/get-all-user-details",function (req, res){
    let sql='SELECT * FROM users';
    pool.query(sql, function (error, results, fields) {
        if (error) throw error;
        res.status(201).json({success: true, results, msg: "Users information retrieved successfully"});
    });

})
module.exports = router;