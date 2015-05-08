var parseData 	 = require('../lib/get-form-data.js');
var validateUser = require('../lib/validate-user.js');
var db 			 = require("../db-config.js");

function deletes (req, res) {
	validateUser(req, res, function() {
		var param = req.url.split('/').pop()

		db.remove('orders', param, function (err) {
			if (err) {
				console.log(err)
				res.writeHead(500);
				res.write(err);
				res.end();
			} else {
				res.writeHead(303, {
					"Location": "/#/orders/true"
				});
				res.end();
			}
		});
	});
};

module.exports = deletes;