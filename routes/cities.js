var express = require('express');
var router = express.Router();
const fs = require('fs');


/* GET */
router.get('/', function (req, res, next) {
  fs.readFile('stad.json', (err, data) => {
      if(err) {
          console.log("Något gick snett");
          return;
      }

      const cities = JSON.parse(data);

      res.status(200).send(cities);
  });
  return;
});

/* POST */
router.post('/', function (req, res) {
  fs.readFile('stad.json', (err, data) => {
      if(err) {
          console.log("Något gick snett");
          return;
      }


      const cities = JSON.parse(data);

      const newCity = {
        "id":cities.length,
        "stadname":req.body.city,
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

module.exports = router;
