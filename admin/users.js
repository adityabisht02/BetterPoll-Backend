const express = require("express");
const app=express();
const pool = require("../mysqlconnector");
const router = express.Router();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

const addNewUser = async (req, res) => {
    const user = req.body;
    console.log(user);
    pool.query("INSERT INTO users SET ? ", {users: user}, function (error, results, fields) {
        if (error) throw error;
        res.status(201).json({success: true, results, msg: "User created successfully"});
    });
}

router.post("/new-user", addNewUser);

router.post("/get-user", function (req, res) {
    console.log(req.body)
    res.send(req.body)
})
module.exports = router;