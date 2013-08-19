var utils = require('../utils');
var assert = require('assert');
var framework = require('../index');
var http = require('http');

var url = 'http://127.0.0.1:8001/';
var errorStatus = 0;
var max = 1000;

framework.init(http, false, 8001);

framework.on('close', function() {
	console.log('close');
});

console.log(url);