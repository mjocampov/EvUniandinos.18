var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'EvUniandos.18 back-end'});
});

module.exports = router;
