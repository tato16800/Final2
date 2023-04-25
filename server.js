const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/app/views/news.ejs'));

app.use(bodyParser.urlencoded({extended: false}));

module.exports = app;