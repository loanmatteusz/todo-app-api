const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

// const allowCors = require('./cors');

const PORT = 3003;

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

server.listen(PORT, () => console.log(`Backend is running on port ${PORT}!`));

module.exports = server;
