require("dotenv").config();
const express= require("express");
const app = express();
const cors = require("cors");
app.use(cors());
var router = express.Router();
app.use(router);


//importing routers
const login=require("./apis/login");
const messmanagement=require('./apis/messmanagement');

//setting apis
app.use("/login", login); 
app.use("/mess",messmanagement);


router.get("/", function(req, res){
    return res.json({success:true,message:"you have succesfully made an api call to the backend"});
})



app.listen(5000 || process.env.PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", 5000);
});