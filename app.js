const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
// Se incluye para poder hacer request desde otras rutas.
const cors = require('cors');

// Setting express
const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Permite las consultas desde Vue / React
// noinspection JSCheckFunctionSignatures
app.use( cors({ origin: true, credentials: true  }) );
// Agregando rutas.
require('./routes')(app);

app.get('*',
  (req, res) => res.status(200).send( {message: 'Hola!'})
);

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);

module.exports = app;
