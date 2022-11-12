const express= require("express");
var router = express.Router();
//mysql connector pool
const pool=require("../mysqlconnector");


//view-mess-details   (will include only menu because messcode is basically id of the user)
router.get("/view-mess-details",function(req, res){
    const day=req.body.day;
    if(!day){
        return res.json({success:false,msg:"Day or name missing from request body"});
    }
    pool.query("SELECT * FROM menus day = ?", day, function (error, results, fields){
        if (results.length==0){
            menu="Menu not configured";
        }
        else{
            menu=results[0].menu
        }
    });
})




modue.exports=router;