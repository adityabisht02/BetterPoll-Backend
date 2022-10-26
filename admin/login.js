const express = require("express");
const app = express();
const pool = require("../mysqlconnector");
const router = express.Router();

const bcrypt = require("bcrypt");

//sign-up api for admins
router.post("/add-new-admin", async (req, res) => {
  try {
    console.log(req.body);
    const { name, password, email } = req.body;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    let sql = `INSERT INTO admin (username, password, email) VALUES (?, ?, ?);`;
    pool.query(sql, [name, hashedPassword, email], function (error, results) {
      if (error) throw error;
      res
        .status(201)
        .json({ success: true, results, msg: "Admin created successfully" });
    });
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async function (req, res) {
  try {
    var adminExist = false;
    const { name, password } = req.body;
    console.log("req.body is ", req.body);
    let sql = "SELECT * FROM admin WHERE username = ?";
    pool.query(sql, name, function (error, results) {
      if (error) throw error;
      else {
        console.log("results - ", results);
        results.forEach((element) => {
          console.log(element);
          const match = bcrypt.compareSync(password, element.password);
          console.log("Match - ", match);
          if (match) {
            adminExist = true;

            console.log("adminexist - ", adminExist);
            res.status(201).json({
              success: true,
              element,
              msg: "Admin",
            });
          }
        });
        console.log("admin - ", adminExist);
        if (adminExist === false)
          res.status(500).json({
            success: false,
            msg: "Admin doesn't exist",
          });
      }
    });
  } catch (err) {
    console.log("Error -", err);
  }
});

//login api for admins

module.exports = router;
