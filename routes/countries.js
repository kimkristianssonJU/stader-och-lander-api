const { json } = require('express');
var express = require('express');
var router = express.Router();

const fs = require('fs');

/* GET */
router.get('/', function (req, res, next) {
    fs.readFile('land.json', (err, data) => {
        if(err) {
            console.log("Något gick snett");
            return;
        }

        const countries = JSON.parse(data);

        res.status(200).send(countries);
    });
    return;
});

module.exports = router;
