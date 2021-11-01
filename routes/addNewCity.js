var express = require('express');
var router = express.Router();
const fs = require('fs');

/* POST */
router.post('/', function (req, res) {
    let cityID = 0;
res.send("OK");
    console.log("OKKOKOK");
    /* ID-nummer */
    fs.readFile('id-numbers.json', (err, data) => {
        if (err) {
            console.log("Något gick snett");
            return;
        }

        const idNumbers = JSON.parse(data);
        console.log(data);

        cityID = idNumbers.cityid++;

        fs.writeFile('id-numbers.json', JSON.stringify(idNumbers, null, 2), (err) => {
            if (err) {
                console.log(err);
            }
        });

        /* Städer */
        fs.readFile('stad.json', (err, data) => {
            if(err) {
                console.log("Något gick snett");
                return;
            }
      
      
            const cities = JSON.parse(data);
      
            const newCity = {
              "id":cityID,
              "stadname":req.body.stadname,
              "countryid":req.body.countryid,
              "population":req.body.population
            }
      
            cities.push(newCity);
      
            fs.writeFile('stad.json', JSON.stringify(cities, null, 2), (err) => {
              if(err) {
                  console.log(err);
              }
          });
        });
        return;
    });
});

module.exports = router;
