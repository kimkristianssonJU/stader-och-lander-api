var express = require('express');
var router = express.Router();
const fs = require('fs');

/* POST */
router.post('/', function (req, res) {
    /* Länder */
    fs.readFile('land.json', (err, data) => {
        if (err) {
            console.log("Något gick snett");
        }

        const countries = JSON.parse(data);

        countries.forEach((country, index) => {
            if (country.id === req.body.countryID) {
                countries.splice(index, 1);
            }
        });

        /* Länder */
        fs.writeFile('land.json', JSON.stringify(countries, null, 2), (err) => {
            if (err) {
                console.log(err);
            }
        });
    });

    /* Städer */
    fs.readFile('stad.json', (err, data) => {
        if (err) {
            console.log("Något gick snett");
        }
        const cities = JSON.parse(data);
        const removeCities = [];

        /* Tar bort alla städer */
        cities.forEach((city, index) => {
            if (city.countryid === req.body.countryID) {
                removeCities.push(city);
            }
        });

        removeCities.forEach(city => {
            const index = cities.indexOf(city);
            cities.splice(index, 1);
        });

        fs.writeFile('stad.json', JSON.stringify(cities, null, 2), (err) => {
            if (err) {
                console.log(err);
            }
        });
    });

    res.status(200).send();
});

module.exports = router;
