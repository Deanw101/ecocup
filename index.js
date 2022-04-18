const express = require('express');
const path = require('path');
const compression = require('compression');

const helmet = require('helmet');
const morgan = require('morgan');
const nodemailer = require('nodemailer');
// const generatePhotoshootEmail = require('./generatePhotoshootEmail.js')
// const generateEventEmail = require('./generateEventEmail.js')
// const generateContactEmail = require('./generateContactEmail.js')

const PORT = process.env.PORT || 3001

const app = express();

// Set env variables in dev env
if (app.get('env') === 'development') require('dotenv').config();




// middleware
app.use(compression());
// app.use('/api/*', apiLimiter); // activate limiter for api calls only
app.use(morgan('tiny')); // server logger
// app.use(helmet()); // header security
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '1000kb' }));




app.use(express.static('public'));


app.listen(PORT, () => console.log('Server OK', PORT));
