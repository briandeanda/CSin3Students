'use strict';
var username = process.env.USER;
var password = process.env.PASSWORD;
var host = process.env.HOSTNAME;

module.exports = {
	mongodb: {
		uri: "mongodb://" + username + ":" + password + "@" + host + ":47632/csin3students"
	}
};
