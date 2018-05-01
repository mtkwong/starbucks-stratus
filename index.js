const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5555;
const app = express();
const url = require('url');
const fs = require('fs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var server = app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

app.get('/', (req, res) => res.render('index'));
app.get('/orders', (req, res) => res.render('orders'));
app.get('/catalog', (req, res) => res.render('catalog'));

function stop() {
  server.close();
}

module.exports = app;
module.exports.stop = stop;