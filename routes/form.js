var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  	res.send({
  		form: req.body
  	});
});

module.exports = router;
