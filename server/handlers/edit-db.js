var parseData 	 	= require('../lib/get-form-data.js');
var validateOrder = require('../lib/validate-order.js');
var validateUser = require('../lib/validate-user.js');
var splitObject = require('../lib/split-orders-object.js');
var db 				= require("../db-config.js");

function edit (req, res, cb) {
	parseData(req, function (data) {
		validateOrder(data, res, function () {
			validateUser(req, res, function() {
				var splitData = splitObject(data);
				db.edit('orders', splitData, function (err) {
					if (err) {
						console.log(err)
						res.writeHead(500);
						res.write(err);
						res.end();
					} else {
						cb(req, res);
						res.writeHead(303, {
							"Location": "/#/orders"
						});
						res.end();
					}
				});
			});
		});
	});
};

module.exports = edit;