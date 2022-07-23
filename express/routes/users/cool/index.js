// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;


const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
  res.send("You're so cool");
})

module.exports = router;