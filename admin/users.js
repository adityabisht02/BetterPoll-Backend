const express = require("express");
const pool = require("../mysqlconnector");
const router = express.Router();



router.post("/add-new-user", async(req,res)=>{
    const {name, email, phone} = req.body;

    let sql = `INSERT INTO users (name, email, phone) VALUES (?, ?, ?, ?);`;
    pool.query(sql, [name, email, phone], function (error, results, fields) {
        if (error) throw error;
        res.status(201).json({success: true, results, msg: "User created successfully"});
    });
});

router.get("/get-user-details", function (req, res) {
    const username = req.body;
    if(!username){
        return res.status(400).json({success: false,msg:"Enter a valid user!"});
    }
    let sql='SELECT * FROM users WHERE name = ?';

    pool.query(sql,username,function (error, results, fields) {
        if (error) throw error;
        res.status(201).json({success: true, results, msg: "User retrieved successfully"});
    });
})

router.get("/get-all-user-details",function (req, res){
    let sql='SELECT * FROM users';
    pool.query(sql, function (error, results, fields) {
        if (error) throw error;
        res.status(201).json({success: true, results, msg: "Users information retrieved successfully"});
    });

})


router.put('/edit-user-details', async (req, res) => {
    const requestPayload = {
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone
    };

    // if username is not present then how can we identify that which user's data
    // should be changed
    if(!requestPayload.name) {
        return res.status(400).json({
            message : "Username is missing!"
        });
    }

    // if email and phone both not present 
    if(!requestPayload.email && !requestPayload.phone) {
        return res.status(400).json({
            message : "Incomplete/Invalid request payload!"
        })
    }
    
    pool.query(`SELECT COUNT(*) as count FROM users WHERE name = '${requestPayload.name}';`, (error, result) => {
        if(error) {
            return res.status(500).json({
                message : "internal server error"
            });
        }

        if(result[0].count < 1) {
            return res.status(400).json({
                message : "Invalid username!"
            });
        }

        let query = ``;

        if(requestPayload.email && requestPayload.phone) {
            query = `UPDATE users SET email = '${requestPayload.email}', phone = ${requestPayload.phone} WHERE name = '${requestPayload.name}';`;
        } else if(requestPayload.email) {
            query = `UPDATE user SET email = '${requestPayload.email}' WHERE name = '${requestPayload.name}';`;
        } else if(requestPayload.phone) {
            query = `UPDATE user SET phone = ${requestPayload.phone} WHERE name = '${requestPayload.name}';`;
        } 

        pool.query(query, (error, result) => {
            if(error) {
                return res.status(500).json({
                    message : "internal server error"
                });
            } 
            return res.status(200).json({
                message : "user updated"
            });
        })
    });
})

module.exports = router;
