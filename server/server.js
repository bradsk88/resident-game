'use strict';
var express = require('express');
var cors = require('cors');
var localServer = require('../src/server/local');

console.log(server);

var app = express();

app.use(express.static(`${__dirname}/public`));
app.use(cors());
console.log('running');

app.get('/api', function(req, res){
	console.log('sending');
res.send(server.generateStoryEvent());
});
app.listen(3000);
