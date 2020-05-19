'use strict';
const express = require('express');
const cors = require('cors');
const rServer = require('../dist/residentServer.node');
const rEvents = require('../dist/residentEvents.node');
const server = new rServer.LocalServer();

const app = express();

app.use(express.static(`${__dirname}/public`));
app.use(cors());
console.log('running');

app.get('/api', function (req, res) {
    server.walk().then(result => res.send(rEvents.serializeStoryEvent(result)));
});
app.listen(3000);
