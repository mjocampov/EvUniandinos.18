var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../front/public/index', {title: 'EvUniandos.18'});
});

module.exports = router;
