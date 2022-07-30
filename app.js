const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors')
require('./config/database');

const usersRouter = require('./app/routes/users');
const notesRouter = require('./app/routes/notes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/users', usersRouter);
app.use('/notes', notesRouter);

module.exports = app;
