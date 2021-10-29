var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST */
router.post('/', function (req, res) {
  let countryID;

  console.log(req.body);

  /* Länder */
  fs.readFile('land.json', (err, data) => {
      if (err) {
          console.log("Något gick snett");
          return;
      }

      const countries = JSON.parse(data);
      
      countryID = countries.length + 1;

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
          "id": cities.length,
          "stadname": req.body.city,
          "countryid": countryID,
          "population": req.body.population
      }

      cities.push(newCity);

      fs.writeFile('stad.json', JSON.stringify(cities, null, 2), (err) => {
          if (err) {
              console.log(err);
          }
      });
  });
  console.log(res);
});

module.exports = router;
