'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');


const app = express ();
const router = express.Router();

mongoose.connect ("mongodb://localhost:27017/projetocompleto",  { useNewUrlParser: true });

const Usuario = require('./models/usuario').default

const indexRoute = require('./routes/index-route')
const usuarioRoute = require('./routes/usuario-route')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))


app.use('/', indexRoute);
app.use('/usuario',usuarioRoute);
app.use('/cupons',usuarioRoute);

module.exports = app;