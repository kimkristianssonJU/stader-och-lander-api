var express = require('express');
var router = express.Router();
const fs = require('fs');


/* POST */
router.post('/', function (req, res, next) {
    /* Städer */
    fs.readFile('stad.json', (err, data) => {
        if (err) {
            console.log("Något gick snett");
            return;
        }
        
        const cities = JSON.parse(data);
        
        cities.forEach((city, index) => {
            if(city.id === req.body.cityID) {
                cities.splice(index, 1);
                return;
            }
        });
        
        fs.writeFile('stad.json', JSON.stringify(cities, null, 2), (err) => {
            if (err) {
                console.log(err);
                return;
            }
        });
        return;
    });
    res.status(200).send();
});

module.exports = router;
