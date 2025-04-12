const express = require('express');
const config = require('../config.js');

const app = express();
const user = require('./components/user/network.js')

// Routes

app.use("/api/user", user);

app.listen(config.api.port, () => {
    console.log(`API is running on port ${config.api.port}`);
})

