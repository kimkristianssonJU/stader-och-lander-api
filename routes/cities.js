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

module.exports = router;
