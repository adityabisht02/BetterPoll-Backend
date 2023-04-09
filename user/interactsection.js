const express = require("express");
var router = express.Router();
//mysql connector pool
const pool = require("../mysqlconnector");
//redis client
const redisClient = require("../redisconnectorclient");
//import bad words
var Filter = require("bad-words");
filter = new Filter();

const REDIS_EXPIRATION = 3600;
//make-post
router.post("/make-post", function (req, res) {
  var { id, postcontent } = req.body;
  //clean the postcontent
  postcontent = filter.clean(postcontent);
  var name;
  pool.query("SELECT * FROM  users WHERE id=?", id, function (error, results) {
    if (error) throw error;
    name = results[0].name;
    console.log(name);
    let sql = "INSERT INTO posts (name, content) VALUES ( ?, ? );";
    pool.query(sql, [name, postcontent], function (error, results, fields) {
      if (error) throw error;
      res.status(201).json({
        success: true,
        name,
        postcontent,
        msg: "Post created successfully",
      });
    });
  });
});

//view-all-posts
router.get("/view-all-posts", function (req, res) {
  //   redisClient.get("posts", (error, posts) => {
  //     if (error) console.log(error);

  //     if (posts != null) {
  //       return res.status(200).json({
  //         success: true,
  //         results,
  //         msg: "All posts retrieved successfully",
  //       });
  //     }
  //   });
  let sql = "SELECT * FROM posts";
  pool.query(sql, function (error, results, fields) {
    if (error) throw error;
    // redisClient.setex("posts", REDIS_EXPIRATION, results);
    res.status(200).json({
      success: true,
      results,
      msg: "All posts retrieved successfully",
    });
  });
});

module.exports = router;
