const express= require("express");
const app = express();
var router = express.Router();
app.use(router);



//mysql connector pool
const pool=require("./mysqlconnector");

router.post("/signup",function(req,res){

});

router.get("/login",function(req,res){

});

module.exports = router;