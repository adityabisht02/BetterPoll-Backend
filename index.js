require("dotenv").config();
const express= require("express");
const app = express();
const cors = require("cors");
app.use(cors());
var router = express.Router();
app.use(router);

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//mysql connector pool
const pool=require("./mysqlconnector");

//importing routers
const userLoginApis=require("./user/login");
const adminUserApis = require("./admin/users");
const adminShuttleApis=require("./admin/shuttleservice");
const userviewShuttleservice = require("./user/shuttleservice");
const adminMessApis=require("./admin/messmanagement");

//setting apis
app.use("/", userLoginApis); 
app.use("/admin", adminUserApis);
app.use("/admin", adminShuttleApis)
app.use("/",userviewShuttleservice);
// app.use("/admin", adminMessApis)




app.listen(3000 || process.env.PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", 3000);
});
