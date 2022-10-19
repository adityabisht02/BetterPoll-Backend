const express = require("express");
const app = express();
const pool = require("../mysqlconnector");
const router = express.Router();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// day: most date formats will work. ISO 8601 format is the standard and preferred: YYYY-MM-DD
// breakfastMenu, lunchMenu, and dinnerMenu expect a string and will attempt to convert anything submitted into a string
router.put('/edit-menu', (req, res) => {
    // sanitize data
    const sanitizedPayload = {
        // convert to unix time // sets a NaN if invalid
        day: Date.parse(req.body.day),
        // each of these is supposed to be text so make them strings and trim
        breakfastMenu: req.body.breakfastMenu.toString().trim(),
        lunchMenu: req.body.lunchMenu.toString().trim(),
        dinnerMenu: req.body.dinnerMenu.toString().trim(),
    }

    // if unable to con
    if (isNaN(sanitizedPayload.day)) {
        return res.status(400).json({
            message: "the date is invalid",
            error: "unable to parse: " + req.body.day,
        });
    }
    else {
        sanitizedPayload.day = sanitizedPayload.day.toString();
        // we only want the day so trim off hours, minutes, and seconds
        sanitizedPayload.day = sanitizedPayload.day.slice(0, sanitizedPayload.day.length - 5).concat("00000");
    }

    let successfulStatus;

    // check if we can find the day in the menus table
    pool.query(`SELECT COUNT(1) as count FROM menus WHERE day = '${sanitizedPayload.day}';`, (error, result) => {
        if (error) {
            return res.status(500).json({
                message: 'internal server error',
                // include error as a seperate object so the message can be displayed to the user and the error can be used for easier front-end debugging
                error: error,
            });
        }

        let query = ``;
        // if the menu for the day doesn't exist then create a new record of the menu
        if (result[0].count < 1) {
            query = `INSERT INTO menus (day, breakfastMenu, lunchMenu, dinnerMenu) VALUES ('${sanitizedPayload.day}', '${sanitizedPayload.breakfastMenu}', '${sanitizedPayload.lunchMenu}', '${sanitizedPayload.dinnerMenu}');`;
            // if a record is created then we want to return the resource created code
            successfulStatus = 201;
        }
        // if the menu for the day exists then override it
        else {
            query = `UPDATE menus SET breakfastMenu = '${sanitizedPayload.breakfastMenu}', lunchMenu = '${sanitizedPayload.lunchMenu}', dinnerMenu = '${sanitizedPayload.dinnerMenu}' WHERE day = '${sanitizedPayload.day}';`;
            // if a record is simply updated then return the "OK" code
            successfulStatus = 200;
        }

        pool.query(query, (error, result) => {
            if (error) {
                return res.status(500).json({
                    message: `internal server error`,
                    error: error,
                });
            }
            return res.status(successfulStatus).json({
                message: "menu sucessfully updated",
                // include result for easier debugging of front-end
                result: result,
            });
        })
    })
})



//Function to generate 5 digit random number
function randomNum() {
    let fiveDigitNum = Math.floor(Math.random() * 90000) + 10000;
    return fiveDigitNum;
}


module.exports = router;