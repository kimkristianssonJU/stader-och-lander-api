var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var countriesRouter = require('./routes/countries');
var cityRouter = require('./routes/cities');
var addNewCountryRouter = require('./routes/addNewCountry');
var removeCityRouter = require('./routes/removeCity');
var removeCountryRouter = require('./routes/removeCountry');
var addNewCityRouter = require('./routes/addNewCity');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/countries', countriesRouter);
app.use('/cities', cityRouter);
app.use('/addNewCountry', addNewCountryRouter);
app.use('/removeCity', removeCityRouter);
app.use('/removeCountry', removeCountryRouter);
app.use('/addNewCity', addNewCityRouter);

module.exports = app;
