const express= require("express");
var router = express.Router();
//mysql connector pool
const pool=require("../mysqlconnector");


//make-post 
router.post("/make-post",function (req, res){
    const { name, postcontent, date } = req.body

    let sql='INSERT INTO posts (name, postcontent, date) VALUES ( ?, ?, ? );';
    pool.query(sql, [name, postcontent, date],  function (error, results, fields) {
        if (error) throw error;
        res.status(201).json({success: true, results, msg: "Post created successfully"});
    });
})



//view-all-posts
router.get("/view-all-posts", function (req, res){
    let sql='SELECT * FROM posts';
    pool.query(sql, function (error, results, fields) {
        if (error) throw error;
        res.status(200).json({success: true, results, msg: "All posts retrieved successfully"});
    });
})

module.exports=router;