require("dotenv").config();
const express= require("express");
const app = express();
const cors = require("cors");
app.use(cors());
var router = express.Router();
app.use(router);

const addNewUser = require("./admin/users");

//mysql connector pool
const pool=require("./mysqlconnector");

//importing routers
const login=require("./user/login");

//setting apis
app.use("/", login); 


router.get("/", function(req, res){
    pool.query('SELECT * FROM users', (ex, rows) => {
        if (ex) {
          console.log(ex);
        } else {
          return res.json({success:true,message:"you have succesfully made an api call to the backend",value:rows});
        }
      });
})
router.post("/newUser", addNewUser);



app.listen(5000 || process.env.PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", 5000);
});