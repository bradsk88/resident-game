'use strict';

const express = require('express');
const cors = require('cors');
const localServer = require('../dist/node-local-server');
console.log(localServer);

const server = new localServer.LocalServer();
console.log(server);

const app = express();

app.use(express.static(`${__dirname}/public`));
app.use(cors());
console.log('running');

app.get('/api', function (req, res) {
    console.log('sending');
    server.walk().then(result => res.send(result.description));
});
app.listen(3000);
