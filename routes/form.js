var express = require('express');
var router = express.Router();
var nameUser = ['Andriy', 'Yura', 'Kolya'];

router.get('/', function(req, res, next) {
	var name = req.query.name;
	var isPresentName = 'You can use this name';
	for( var i = 0; i < nameUser.length; i++){
		if(name == nameUser[i]){
			isPresentName = 'Name is present';
		}
	}
	res.send(isPresentName);
});

module.exports = router;
