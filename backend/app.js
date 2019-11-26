const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

const experimentsRoutes = require('./routes/experiments');

const app = express();



mongoose.connect(
'mongodb+srv://DatabaseTester1:TestingExam1@testcluster1-wtnp1.mongodb.net/test?retryWrites=true&w=majority').then(() => {
  console.log("Connected to database");
}).catch(() => {
  console.log("Database connection failed");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/images', express.static(path.join('backend/images')));
app.use('/', express.static(path.join(__dirname, 'Ten-Year-Anniversary-Site')));

app.use(cors());

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "*"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Authorization, X-Requested-With, Access-Control-Allow-Header, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Credentials",
    "true"
  );
  next();
});

app.use('/api/experiments', experimentsRoutes);
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'Ten-Year-Anniversary-Site', 'index.html'));
});

module.exports = app;
