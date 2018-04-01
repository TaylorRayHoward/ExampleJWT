require('dotenv').config();
const express = require('express');
const app = new express();
const parser = require('body-parser');
const passport = require('./config/passport');
const routes = require('./routes/auth');

app.use(passport.initialize());
app.use(parser.urlencoded({
  extended: false
}));
app.use(parser.json());
app.use(routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
