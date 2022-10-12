const express= require("express");
const app = express();
var router = express.Router();
app.use(router);

//mysql connector pool
const pool=require("./mysqlconnector");

router.post("/login", function(req, res){
    const { email } = req.body;
    
    pool.query("SELECT * FROM users WHERE email = ?", email, function (error, results, fields){
        if (error) throw error;
        res.status(201).json({error: false, results, msg: "You have successfully logged in"});
    });
});

module.exports = router;