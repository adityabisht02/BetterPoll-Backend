const express = require("express");
const app = express();
const pool = require("../mysqlconnector");
const router = express.Router();

const bcrypt = require("bcrypt");

//sign-up api for admins
router.post("/sign-up", async (req, res) => {
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

//login api for admins

module.exports = router;
