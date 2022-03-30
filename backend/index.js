const express = require ('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const db = require('./models/dbhelper')

const app = express();

db.connection();
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(cookieParser())

