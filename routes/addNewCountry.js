var express = require('express');
var router = express.Router();
const fs = require('fs');

/* POST */
router.post('/', function (req, res) {
    let countryID = 0;
    let cityID = 0;

    /* ID-nummer */
    fs.readFile('id-numbers.json', (err, data) => {
        if (err) {
            console.log("Något gick snett");
            return;
        }

        const idNumbers = JSON.parse(data);
        console.log(data);

        countryID = idNumbers.countryid++;
        cityID = idNumbers.cityid++;

        fs.writeFile('id-numbers.json', JSON.stringify(idNumbers, null, 2), (err) => {
            if (err) {
                console.log(err);
            }
        });

        /* Länder */
        fs.readFile('land.json', (err, data) => {
            if (err) {
                console.log("Något gick snett");
                return;
            }

            const countries = JSON.parse(data);

            const newCountry = {
                "id": countryID,
                "countryname": req.body.country
            }

            countries.push(newCountry);

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

            const newCity = {
                "id": cityID,
                "stadname": req.body.city,
                "countryid": countryID,
                "population": req.body.population
            }

            cities.push(newCity);

            cityID++;

            fs.writeFile('stad.json', JSON.stringify(cities, null, 2), (err) => {
                if (err) {
                    console.log(err);
                }
            });
        });
    });
});

module.exports = router;
