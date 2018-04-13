const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const con = require('./controller');
const massive = require('massive');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.get('/api/houses', con.read)
app.post('/api/houses', con.create)
app.delete('/api/houses/:id', con.delete)


massive(process.env.CONNECTION_STRING).then(dbInstance =>{
    app.set('db', dbInstance)
    app.listen(4000, () => console.log(`Listening on 4000`))
});