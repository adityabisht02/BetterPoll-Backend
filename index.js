require("dotenv").config();
const express= require("express");
const app = express();
const cors = require("cors");
app.use(cors());
var router = express.Router();
app.use(router);

//mysql connector pool
const pool=require("./mysqlconnector");

//importing routers
const login=require("./apis/login");

//setting apis
app.use("/", login); 


//function to initialise tables for database setup (needs to be run only once)
function initialiseDB(){
  pool.query("CREATE TABLE admin (id int,name varchar(50),email varchar(50));", (ex, rows) => {
    if (ex) {
      console.log(ex);
    } else {
      console.log("created admin")
    }
  });

  pool.query("CREATE TABLE users (id int,name varchar(50),email varchar(50),phone int(50));", (ex, rows) => {
    if (ex) {
      console.log(ex);
    } else {
      console.log("created admin")
    }
  });
}

// initialiseDB();

router.get("/", function(req, res){
    pool.query('SELECT * FROM users', (ex, rows) => {
        if (ex) {
          console.log(ex);
        } else {
          return res.json({success:true,message:"you have succesfully made an api call to the backend",value:rows});
        }
      });
  
})



app.listen(5000 || process.env.PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", 5000);
});