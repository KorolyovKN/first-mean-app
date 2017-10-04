const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
  .then(posts => {
  res.status(200).json(posts.data);
})
.catch(error => {
  res.status(500).send(error)
});
});



/*// DATABASE SETUP
var mongoose   = require('mongoose');
mongoose.connect('mongodb://node:node@ds145293.mlab.com:45293/my-test-database'); // connect to our database

var Bear     = require('./bear');

// Handle the connection event
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("DB connection alive");
});

router.get('/posts', function (req, res) {
  Bear.find(function (err, bears) {
    if(err)
      res.send(err);
    res.json(bears);
  })
})*/

module.exports = router;
