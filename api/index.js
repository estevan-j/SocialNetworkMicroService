const express = require('express');
const config = require('../config.js');
const bodyParser = require('body-parser');

const app = express();
const user = require('./components/user/network.js')


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Routes

app.use("/api/user", user);

app.listen(config.api.port, () => {
    console.log(`API is running on port ${config.api.port}`);
})

