const pool = require("../mysqlconnector");

const addNewUser = async (req, res) => {
    const user = req.body;
    pool.query("INSERT INTO users SET ? ", {users: user}, function (error, results, fields) {
        if (error) throw error;
        res.status(201).json({error: false, results, msg: "User created successfully"});
    })

}

module.exports = addNewUser;