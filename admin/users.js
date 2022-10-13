const express = require("express");
const app=express();
const pool = require("../mysqlconnector");
const router = express.Router();
const bodyParser = require("body-parser");

const jsonParser = bodyParser.json();

const addNewUser = async (req, res) => {
    const {user} = req.body;
    pool.query("INSERT INTO users SET ? ", {users: user}, function (error, results, fields) {
        if (error) throw error;
        res.status(201).json({success: true, results, msg: "User created successfully"});
    });

    res.send(user);
}

router.post("/add-new-user",jsonParser,addNewUser);

router.post("/get-user", jsonParser,function (req, res) {
    console.log(req.body)
    res.send(req.body)
})
module.exports = router;