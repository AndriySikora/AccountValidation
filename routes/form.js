var express = require('express');
var router = express.Router();
var nameUser = ['Andriy', 'Yura', 'Kolya'];

router.get('/', function(req, res, next) {
	var name = req.query.name;
	res.send(nameUser.indexOf(name) === -1);
});

module.exports = router;
