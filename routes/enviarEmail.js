var express = require('express');
var router = express.Router();
var EnvioDeEmail = require('../application/envioDeEmail');

router.post('/enviar', function(req, res, next) {
	var mailOptions = req.body.options.mailOptions;
	var email = new EnvioDeEmail(mailOptions);
	email.enviar(function(message){
		res.send(message);
	});
});

router.get('/', function(req, res, next) {
	res.render('index', {});
});

module.exports = router;