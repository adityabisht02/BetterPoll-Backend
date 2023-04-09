require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");


app.use(cors());
var router = express.Router();
app.use(router);

//middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

//mysql connector pool
const pool = require("./mysqlconnector");
const redisClient=require("./redisconnectorclient");
//importing routers
const userLoginApis = require("./user/login");
const userMessApis = require("./user/messmanagement");
const adminUserApis = require("./admin/users");
const adminShuttleApis = require("./admin/shuttleservice");
const userShuttleServiceApis = require("./user/shuttleservice");
const userInteractApis = require("./user/interactsection");
const adminMessApis = require("./admin/messmanagement");
const adminLoginApis = require("./admin/login");
const userGatepassApis = require("./user/gatepass");
// const adminGatepassApis=require("./admin/gatepass");

//setting user apis
app.use("/", userLoginApis);
app.use("/", userShuttleServiceApis);
app.use("/", userMessApis);
app.use("/", userInteractApis);
app.use("/", userGatepassApis);

//setting admin apis
app.use("/admin", adminUserApis);
app.use("/admin", adminShuttleApis);
app.use("/admin", adminLoginApis);
app.use("/admin", adminMessApis);

app.listen(3000 || process.env.PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", 3000);
});
