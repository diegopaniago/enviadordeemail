var nodemailer = require('nodemailer');
var MailOptions = require('../domain/mailOptions');

function EnvioDeEmail(options){
	var self = {};
	
	self.servidorSmtp = "smtps://nargsemcasa@gmail.com:@25pde92@smtp.gmail.com";
	
	var transporter = nodemailer.createTransport(self.servidorSmtp);
 
	var mailOptions = new MailOptions(options);

	self.enviar = function(callback){
		transporter.sendMail(mailOptions.options, function(error, info){
			if(error){
				callback(error.message);
				return console.log(error.message);
			}
			callback('Message sent: ' + info.response);
			return console.log('Message sent: ' + info.response);
		});
	};
 
	return self;
}

module.exports = EnvioDeEmail;