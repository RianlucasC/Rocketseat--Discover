const express = require('express');

const axios = require('axios');
const app = express();

app.listen('3000');

app.route('/').get( (req ,res) => {
    res.send('teste');
});

