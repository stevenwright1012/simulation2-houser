const express = require('express');
const bodyParser = require('body-parser');
const con = require('./controller');
const massive = require('massive');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
})

const port = 4000
app.listen(port, console.log(`Listening on ${port}`))